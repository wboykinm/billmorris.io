---
layout: post
title: "Separation of Concerns"
author: "Bill Morris"
date: 2014-08-24T18:08:18.106Z
lastmod: 2019-07-19T09:09:06-04:00

description: ""

subtitle: "I have a minor quibble."

image: "/assets/img/2014-08-24_1.png" 
images:
 - "images/2014-08-24_1.png" 
 - "images/2014-08-24_2.png" 
 - "images/2014-08-24_3.png" 
 - "images/2014-08-24_4.png" 
 - "images/2014-08-24_5.png" 
 - "images/2014-08-24_6.png" 
 - "images/2014-08-24_7.png" 
 - "images/2014-08-24_8.jpeg" 


aliases:
    - "/separation-of-concerns-35a7dae3e78e"
---

> Working with shaded relief and satellite imagery in Mapbox Studio

### I have a minor quibble.

Amid the wonders that the Mapbox team has been producing of late, they’ve rebranded the groundbreaking Tilemill as [Mapbox Studio](https://www.mapbox.com/mapbox-studio/#darwin), given it a souped-up engine powered by OpenStreetmap-based vector tiles, and turned it loose on the beta crowd to a reception somewhere between “rapturous” and “bieberesque”. It makes web mapping both better-supported and more flexible, and at [Faraday](http://faraday.io/) we quickly used it to build [our basemap](https://api.tiles.mapbox.com/v4/faraday2.74974c94/page.html?access_token=pk.eyJ1IjoiZmFyYWRheTIiLCJhIjoiTUVHbDl5OCJ9.buFaqIdaIM3iXr1BOYKpsQ#14/42.3591/-71.0639).

Mapbox Studio comes with four starter templates . . .




![image](/assets/img/2014-08-24_1.png)



. . . and my quibble is with the [“Satellite Afternoon” template](https://github.com/mapbox/satellite-afternoon.tm2). I played with it for awhile before I noticed I was unhappy with it in a familiar way. Back in my desktop GIS days I had frequently used an ESRI-provided basemap that tried to do the same thing: Overlay shaded relief on satellite imagery. At the time I couldn’t quite place what I found wrong with this kind of basemap, but it’s now clear looking at the Mapbox version:

### The shadows aren’t lining up.

Shaded relief maps present a stylized view of sunlight smacking terrain. Satellite imagery — unless acquired at nadir angle — shows actual sunlight on terrain. It’s very unlikely that the two will have exactly the same zenith and azimuth angles by chance:




![image](/assets/img/2014-08-24_2.png)

Mapbox Satellite view of the peaks near Eldorado Canyon in Colorado. Note the sun azimuth angle from the Southeast, casting shadows on the Northwest slopes.





![image](/assets/img/2014-08-24_3.png)

The same view in the Mapbox Studio “Satellite Afternoon” template — the solar azimuth is almost exactly the opposite of the underlying imagery.



It’s a quick enough fix to reverse the terrain shadows . . .




![image](/assets/img/2014-08-24_4.png)

The Mapbox Studio “Satellite Afternoon” template with hillshade matching the solar azimuth of the underlying imagery . . . at this location



. . . and now the hillshade compliments the imagery underneath, instead of fighting with it. This even allows us to reduce the desaturated feel of the imagery in the template, and bring up what is essentially terrain-enhanced imagery:




![image](/assets/img/2014-08-24_5.png)

Mapbox Studio “Satellite Afternoon” template with unfiltered imagery and azimuth-aligned, composited hillshade



To go completely nuts, we can layer in light contours so the shadows aren’t information vacuums:




![image](/assets/img/2014-08-24_6.png)



And now we’ve basically reversed the conceit of the “Satellite Afternoon” template, going from the stylized terrain map created by Mapbox to more of a terrain-accented satellite basemap. This is more of an information-dense basemap, so it probably won’t serve the same purpose as the original template. [_(Here’s the revised CartoCSS)_](https://gist.github.com/wboykinm/8bd89a8b4ef0d489a4ba)

### Back to the quibble.

It’s solved, right? Alas, if we travel to New Hampshire and the slopes of Mt. Washington, we find that hillshade and satellite shadows are again mismatched:




![image](/assets/img/2014-08-24_7.png)

Restyled “Satellite Afternoon”; arrow indicates the azimuth angle of the sun, about 90° misaligned with the overlain hillshade



In fact, despite [the awesome work the Mapbox Satellite team has done standardizing colors and resolutions](https://www.mapbox.com/blog/processing-raw-naip-into-seamless-imagery/) in a globe of mismatched satellite imagery, it is essentially impossible to standardize solar angle. You can simulate shaded relief for any one image/location/date/time, but it cannot be made globally applicable.

When using ESRI’s satellite/terrain combo basemap years ago, I ultimately decided the best solution was to simply stop trying, and to go with either a shaded relief or a satellite surface. But in the intervening time my relationship with mapping problem solving has changed — helped by the open-source community and by Mapbox in particular — from “The platform can’t do it” to “How can we make the platform do it?” And their team has already [had a few thoughts on the matter](https://www.mapbox.com/blog/dynamic-hill-shading/):




![image](/assets/img/2014-08-24_8.jpeg)

Dynamic Hillshade demo built by Vladimir Agafonkin for Mapbox



If combining hillshade with satellite imagery is a cartographic problem that enough people want solved, I suspect it will get solved. In the meantime I’m going to continue working with Mapbox Studio and having a blast.

_(Cover image of the Himalayas_ [_taken from on board the ISS_](http://eol.jsc.nasa.gov/scripts/sseop/photo.pl?mission=ISS008&amp;roll=E&amp;frame=13304)_, provided by NASA)_
