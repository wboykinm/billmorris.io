---
title: "The cartographer’s promised land"
author: "Bill Morris"
date: 2015-09-17T15:57:07.970Z
lastmod: 2019-07-19T09:09:16-04:00

description: ""

subtitle: "The new Mapbox Studio just went to private beta today. Here’s what I’ve learned using it."

image: "/posts/2015-09-17_cartographers-promised-land/images/1.png" 
images:
 - "/posts/2015-09-17_cartographers-promised-land/images/1.png" 
 - "/posts/2015-09-17_cartographers-promised-land/images/2.gif" 


aliases:
    - "/the-cartographer-s-promised-land-176a3a6b1d1c"
---

> The new Mapbox Studio just went to private beta today. Here’s what I’ve learned using it.

{{< tweet 644522465104891904 >}}


There’s a lot of marketing behind [the new Mapbox Studio](https://www.mapbox.com/mapbox-studio/), along with [a glowing review in Wired](http://www.wired.com/2015/09/mapbox-studio/). I’ve been fortunate enough to be able to play with it for a few months now as it developed, and the Mapbox team should be proud.

### The good

It’s a flexible adaptation of [fast vector tile technology](https://www.mapbox.com/developers/vector-tiles/) to WebGL, which is already powering Google’s maps and represents the next generation of how we see geographic data in our daily lives. It also carries over what I loved about the previous iteration of the platform:
> The world’s data is at your fingertips, and the old adage — that 90% of a cartographer’s job is data-wrangling — is no longer true.



![image](/posts/2015-09-17_cartographers-promised-land/images/1.png)

The new cartographic interface



Using the new Mapbox Studio, I was able to quickly and painlessly adapt the Faraday basemap style to MapboxGL. It was even easy to include our application fonts. The result is such a different paradigm from raster tiles that I could spend hours just watching it, exploring the rendering and trying to absorb it. I suspect it’ll be many more months before [this ceases to feel novel](http://bl.ocks.org/wboykinm/2a483a2cced4b9b38407).




![image](/posts/2015-09-17_cartographers-promised-land/images/2.gif)

Flying around Seattle



But I’m a cartographer; overanalyzing the feel of a map is what I do. The real test of the new platform will be how developers take to it, and how users react. [It might actually be a positive indicator if users don’t react at all.]

### Maturity needed

I’ve found that some roadblocks remain to using maps produced in the new Mapbox Studio in production on [the Faraday platform](http://app.faraday.io). There are still bugs in [the rendering of layered labels,](https://github.com/mapbox/mapbox-gl-js/issues/757) and for a complex system of panes and API hooks like ours, the mapbox-gl.js library is not a complete replacement for the LeafletJS-based mapbox.js.

The support architecture for the new Mapbox Studio is not yet as robust as what it seeks to replace — just count the number of examples available in the crucial Mapbox documentation: [18 for MapboxGL](https://www.mapbox.com/mapbox-gl-js/examples/) vs. [&gt; 200 for MapboxJS](https://www.mapbox.com/mapbox.js/example/v1.0.0/). I’m not alone in using those examples to guide my adoption of web mapping tools — I owe them a lot, actually, and I think they’ve helped a lot of developers gravitate toward Mapbox’s offerings. The new rendering engine needs more wayfinding on markers, layers, drawings and the whole range of user expectations.

If I’m the target audience for the new Mapbox Studio, their job is done. Its fun, beautiful and fast. But the rest of Faraday’s engineers— and application developers in general — may need more functionality before they can jump onboard.
