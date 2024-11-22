---
layout: post
title: "How to speedrun Landsat truecolor processing in 2024"
date: "2024-11-22T12:00:00-04:00"
author: "Bill Morris"
cover-img: "/assets/img/2024-11-22_cover.jpg"
tags: ["mapping", "satellite", "landsat", "space", "imagery", "gdal"]
---

I had an imagery problem this week that required a quick fix: I needed moderate resolution, truecolor imagery of Bermuda. It turned into an exercise in processing speed, aided by some wonderful tools and open data programs. As 2024 draws to a close there are _many_ different ways to put together a decent picture of somewhere on Earth from space; I aimed for something quick and repeatable here.

Prerequisites:

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [jq](https://jqlang.github.io/jq/)
- [GDAL](https://gdal.org/en/latest/)

_Start the timer!_

## Sourcing new imagery

The Landsat archive is one of the biggest and coolest open data sources out there. It requires a certain amount of domain knowledge to find and use it, but since this is a speedrun, we'll get right into it:

__The best place to start the search for Landsat data is [the USGS Earth Explorer](https://earthexplorer.usgs.gov/).__

From there, you can quickly select a search region and find all the Landsat scenes available covering it, as far back at the 1970s. Instruments have gotten better over time, though, so we'll focus on finding:

- Something from the past year
- Captured by Landsat 8 or 9 
- With as few clouds as possible

A search pulls up a bunch of thumbnails, which we can inspect for cloud cover (I've learned not to trust the cloud estimates in the scene metadata). Finding a reasonable one, we _could_ download part of it directly from Earth Explorer, but for our purposes we need a bit more data, so we'll copy the scene ID:

![1](/shoals/assets/img/2024-11-22_1.jpg)

. . . and go do some scripty things.

## Processing

For a broader overview of how to acquire and handle Landsat data I suggest you check out [this excellent guide by Rob Simmon](https://medium.com/planet-stories/a-gentle-introduction-to-gdal-part-4-working-with-satellite-data-d3835b5e2971), from which I've cribbed whole sections. However we can break the next actions down into bite-sized, repeatable steps, all using my beloved bash shell. 

### Define some variables

That scene ID copied from Earth Explorer is the only thing we need to start.

```
# Define the scene ID
SCENE="LC08_L1TP_006038_20230925_20231002_02_T1"

# Extract components from SCENE
L_PATH=$(echo $SCENE | cut -c 11-13)
L_ROW=$(echo $SCENE | cut -c 14-16)
YEAR=$(echo $SCENE | cut -c 18-21)
```

### Download the data

We need the panchromatic band (more on that below), and for reasons I don't understand, it's only available through the AWS-hosted Landsat archive (My untested suspicion is that - as a file - it's 4x larger than any of the other bands, so it's left out to keep the packaged scenes small). So we'll collect that (band 8) along with the red (band 4), green (band 3), and blue (band 2).

```
BANDS=( 2 3 4 8 )
for BAND in ${BANDS[@]}; do
    aws s3 cp \
        --request-payer requester \
        s3://usgs-landsat/collection02/level-1/standard/oli-tirs/${YEAR}/${L_PATH}/${L_ROW}/${SCENE}/${SCENE}_B${BAND}.TIF \
        ${SCENE}_B${BAND}.TIF
done
```

This may take a few minutes . . .

### Stack and pansharpen the data

The standard Landsat resolution is 30m per pixel, but one part of the instrument catches a broad color spectrum ("panchromatic") at 15m, which we can then use to sharpen the rest of the bands and combine them into a single GeoTIFF.

```
gdal_pansharpen.py \
    ${SCENE}_B8.TIF \
    ${SCENE}_B{4,3,2}.TIF \
    ${SCENE}_sharp.tif \
    -r bilinear \
    -co COMPRESS=DEFLATE \
    -co PHOTOMETRIC=RGB
```

![2](/shoals/assets/img/2024-11-22_2.jpg)

### Tune the colors and compress bit depth

Out of the box, Landsat data can look super dark or super washed out, and that needs to be adjusted. As Rob notes in the guide linked above, Landsat-tuning is practically it's own entire field of study, a mystical art. But - in my only original contribution to this process - I've scripted a quick and dirty automated color stretch. This mostly involves `jq` doing a convoluted dance around the imagery metadata:

```
# Determine color min/max thresholds for stretching
eval $(gdalinfo -mm ${SCENE}_sharp.tif -json | jq -r '
  .bands |
  map(.computedMin) as $mins |
  map(.computedMax) as $maxes |
  "MIN=\($mins | min) MAX=\($maxes | max)"
')

# Smoosh colors into 8-bit range, add "pep"
gdal_translate \
    ${SCENE}_sharp.tif \
    ${SCENE}_scaled_255.tif \
    -scale ${MIN} ${MAX} 0 255 \
    -exponent 0.5 \
    -ot Byte \
    -co COMPRESS=DEFLATE \
    -co PHOTOMETRIC=RGB
``` 

. . . and there it is, surrounded by more clouds than I'd like, but this is a speedrun.

![3](/shoals/assets/img/2024-11-22_3.jpg)


With the above tracks laid, total time from search to final render is under 15 minutes. You can barely make a proper cup of tea in that time.

If this is the sort of operation you find yourself doing frequently, [here's an executable bash script for you](https://gist.github.com/wboykinm/95524eb05cbabdc4f579d914da3a27d8); the only argument is the scene ID. Happy mapping!



