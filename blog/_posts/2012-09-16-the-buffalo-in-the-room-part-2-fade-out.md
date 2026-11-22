---
layout: post
title: "The Buffalo in the Room Part 2: Fade Out"
date: 2012-09-16 12:18:00 -0700
categories: [gis, cartography]
author: "Bill Morris"
cover-img: "/assets/img/2012-09-16_cover.jpg"
---

[In the last post](https://billmorris.io/shoals/gis/cartography/2012/09/12/the-buffalo-in-the-room-part-1-fade-in.html) we looked at the many difficult paths that can take us to the summit of cartographic nirvana known as the "Buffalo Tint", [as rocked by National Geographic Maps and others](http://maps.nationalgeographic.com/maps/print-collection/colorado-basin1-map.html)
As I noted, this effect has traditionally been impossible to pull off in a GIS platform like ArcMap or QGIS. [Tilemill](http://mapbox.com/tilemill/) initially got us a little bit closer by giving us full control over styling possibilities with [CartoCSS code](http://mapbox.com/tilemill/docs/manual/carto/).
But now, as of Tilemill 0.10.0, compositing functions make this kind of effect a snap. Let's look at making a full Buffalo Fade, still using South Sudan as an example. Specifically, we're going to make a fade mask in Tilemill that can be laid over some [Mapbox base layers](http://mapbox.com/tour/design/) in a web map.

---

### Step 1: Preprocessing a Mask

This step - preprocessing in a GIS platform - is optional, it just depends on where you want the fade to begin. The purpose of preprocessing is to create a fixed feature mask;

- QGIS: Run a buffer on your focal feature, larger than the convex hull of the feature for good measure. [Then run a difference process](http://flic.kr/p/d9w8SC) between the buffer and the focal feature.

[![1](/shoals/assets/img/2012-09-16_1.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7hlG-22pPbTUy6Kxsoe7GMUf9QUAvPuPlKBFO5dswGBwpC6VEUyHJ0Pj_8BEHbKHvvGlE3Q-s_AfHp5KYJteClTz3zhwg7BYOWj-_bKQpLDP8yK0fiURoEy3ZPIbVFKHU6xH8B6qwD44/s1600/7972693028_252d5e175b_o.png)

- ArcGIS: Run a buffer on the focal feature, [with "Side Type" set to OUTSIDE-ONLY](http://flic.kr/p/d9w1jA), again to a good distance out beyond your feature's bounding box.

[![2](/shoals/assets/img/2012-09-16_2.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmYgH3WExgvr0fPJ-zVZd5trqYM8zIQDCFvabOhN6q8l_vGwHsBOBm9VKGEqq2ax5GmE6avRiRmx58OnwYncLos6Cpnh-hjRGVcYoptukZr89ZmSX6UDcsVmX9xdL_Z0O-NVit-9Ri18o/s1600/7972667622_171b328055_o.png)

Either way you're aiming for a feature mask that looks like this:

[![3](/shoals/assets/img/2012-09-16_3.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPb0IhDEDW8rbNd1UgBCRgXB9aAjj2Dwyigs_QrLM7Sqgly9856Xjglx98aJ3D3XKW_Jva_SfNo2v4Oa-oK9UocF0NmU04ETLJTIO94ItAeuesTBwe5T3CSkvTPJRJUT_vplD5szXcesA/s1600/2012-09-10_1425.png)

---

### Step 2: Into Tilemill

Then import that feature mask into Tilemill and style it with what might be [the most efficient piece of code](https://gist.github.com/3692831) I've ever cobbled together, compositing the feature mask to fade inward from its border:

[![4](/shoals/assets/img/2012-09-16_4.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1BpBFx3oXuBfe-M2uvyPGLJ2OsNJwBWSBtK_WGoutLe7QjniMDajMXw39j1Sv_vmSzsO-4PVkDho3tq9xjh4dAhgBnLpHe2L4J-QxCQy2kFRKoCiwoowdJMpHuFFy0wRYfUFXyi0zHK0/s1600/2012-09-10_1350.png)

*[Alternately, in this case you can do it by just compositing every country that isn't South Sudan and eliminate the buffer processing above. [Here's the CartoCSS](https://gist.github.com/3691077) to do that]*
That's it. Export to MBTiles format and drop it on top of a base map of your choice. You're off to the races:

[![5](/shoals/assets/img/2012-09-16_5.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie0uBWE4EKlZzKu8GNavOLFcCXHIE3hvpJK-VbYwV12LHXPtxa91cj6FU5i7yN86gCjl_lxNz7_iWQE-Puo77qUseG1BucZuy7mXxEue9rJewecayl7BhvjklKbSi8ZcJtRodfpBxKkrM/s1600/2012-09-10_1545.png)

There are still a few bugs when using this [for dynamic tiles](http://dev.geosprocket.com/swipe-buffalo.html), notably some tile-edge artifacts that break up the smoothness. But overall I'm looking forward to messing around with these new compositing capabilities
