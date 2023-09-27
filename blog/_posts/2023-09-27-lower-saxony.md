---
layout: post
title: "The Latest From Lower Saxony"
date: "2023-09-27T12:00:00-04:00"
author: "Bill Morris"
cover-img: "/assets/img/2023-09-27_cover.png"
tags: ["sqlite", "sql", "geoprocessing", "open data"]
---

I had given up. My [previously-documented enthusiasm](https://billmorris.io/shoals/2023/08/17/land-tiles.html) for SQLite had run dry, and I had already hammered out another solution. Then Charlie stepped in and saved the day with a window function.

## The background
I'm currently perusing the open data portals of The Bundesrepublik Deutschland, looking at the wealth of aerial photography that is available as a public good. The ultimate aim is the constant improvement of [the Mapbox Satellite](https://www.mapbox.com/maps/satellite) baselayer, but I love how much I learn in the process, both about place and data.

In the case of [the State of Lower Saxony](https://www.lower-saxony.de/startseite/), there's a great collection of 20cm-resolution orthophotos with varying recency. More importantly, _there's good metadata_. With [a click](https://opengeodata.lgln.niedersachsen.de/#dop), I was able to download a GeoJSON file containing the source, location, and vintage of every pixel in the region (except for Bremen, I guess?). 

![1](/shoals/assets/img/2023-09-27_1.png)
<small>Orthophoto coverage for the state of Lower Saxony, Germany. The darker the tile, the greater the number of archived imagery acquisitions available.</small>

However, this file contains multiple imagery acquisitions in one place; __I only want the most recent available imagery.__ 

## The flailing hack
I am accustomed to solving this problem with the power of SQL, one way or another. Of late I've been trying to fit as much geoprocessing and general transforming as possible into single commands, and [the mighty `ogr2ogr` toolkit](https://gdal.org/programs/ogr2ogr.html) is my go-to. However, the center of much of its power is in the `-sql` parameter, and the standard dialect is SQLite. Crucially, SQLite [_does not permit ordering of records in aggregate functions_](https://www.sqlite.org/lang_aggfunc.html#group_concat). 

After hammering away optimistically for a few iterations, I gave up and retreated to the comfy cushions of the PostgreSQL lounge, though it required some configuration and a data roundtrip into the DB and back:

```sh
# Get the metadata
wget -c https://single-datasets.opengeodata.lgln.niedersachsen.de/pro-download-indices/dop/lgln-opengeodata-dop20.geojson

# Set up the PostgreSQL environment
dropdb lower_saxony --if-exists
createdb lower_saxony
psql lower_saxony -c "CREATE EXTENSION postgis;"

# Import the metadata to the new DB
ogr2ogr -t_srs "EPSG:4326" \
  -f "PostgreSQL" \
  PG:"dbname=lower_saxony" \
  lgln-opengeodata-dop20.geojson \
  -nln lower_saxony

# Filter for the latest imagery records in each location, using ordered aggregates like a barbarian
psql lower_saxony -c "
    DROP TABLE IF EXISTS lower_saxony_latest;
    CREATE TABLE lower_saxony_latest AS (
    SELECT 
        tile_id,
        (array_agg(Aktualitaet ORDER BY Aktualitaet DESC))[1] AS date,
        (array_agg(rgb ORDER BY Aktualitaet DESC))[1] AS rgb,
        (array_agg(rgb_metadata ORDER BY Aktualitaet DESC))[1] AS rgb_metadata
    FROM lower_saxony
    GROUP BY tile_id
    )
"

# Export to a CSV list
ogr2ogr \
    -f CSV \
    lower_saxony_latest.csv \
    PG:"dbname=lower_saxony" \
    -sql "SELECT tile_id,TO_CHAR(date, 'YYYY-MM-DD’) AS date, rgb, rgb_metadata FROM lower_saxony_latest"
```

My god, what a long-winded bummer.

## The actual solution
The aforementioned Charlie ([Charlie Lefrak, data savant and good dude](https://www.mappingvermont.org/)) thought there was no need to involve PostgreSQL, and after some digging he was able to solve the problem much more elegantly, still within the umbrella of `ogr2ogr`. He did it with a window function, which it turns out [is fully supported by SQLite](https://www.sqlite.org/windowfunctions.html):

```sh
# Get the metadata
wget -c https://single-datasets.opengeodata.lgln.niedersachsen.de/pro-download-indices/dop/lgln-opengeodata-dop20.geojson

# Run it all in one shot through ogr2ogr, ordering with a window function like a civilized human
ogr2ogr -f CSV \
    lower_saxony_latest.csv  \
    lgln-opengeodata-dop20.geojson \
    -dialect sqlite \
    -sql "
        SELECT * FROM ( 
            SELECT 
                tile_id, 
                strftime('%Y-%m-%d',Aktualitaet) AS date,
                rgb, rgb_metadata,
                RANK () OVER ( PARTITION BY tile_id ORDER BY Aktualitaet DESC ) r 
            FROM 'lgln-opengeodata-dop20' 
        ) RANKED WHERE r = 1"
```

This solution - leveraging the `RANK ()` function to identify the latest date - is the winner, because

1. It's shorter.
2. There's no database overhead (I mean, there _is_, but it's hidden by the glory of SQLite).
3. It's very reusable.

I could parameterize this snippet as a function and put it to work on the inevitably-similar data structures of North Rhine-Westphalia! Of Hesse! Even of [other] Saxony! 

I hope it's of use to you too, good reader. Zum Wohl!

![1](/shoals/assets/img/2023-09-27_cover.png)
<small>The Hanover Hauptbannhof, in all its early-summer glory, acquired May 8, 2022.</small>