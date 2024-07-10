---
layout: post
title: "You are here/there"
date: "2024-07-10T12:00:00-04:00"
author: "Bill Morris"
cover-img: "/assets/img/2024-07-10_cover.png"
tags: ["mapping", "policy", "china", "google"]
---

The practical work of digital mapping varies pretty wildly from place to place.

I was reminded of this as I stumbled onto a great example of [the infamous displacement of imagery and road vectors in Google Maps](https://www.reddit.com/r/geography/comments/11s9r7o/why_are_chinese_roads_on_google_maps_in_the_wrong/):

![1](/shoals/assets/img/2024-07-10_1.png)
<small>If you can find it, "Fishing Fun Island" actually sounds kind of awesome.</small>

I'm hardly the first geographer to be both appalled and mesmerized by this policy - very much in keeping with [China's general digital control strategy](https://web.archive.org/web/20061020234453/https://www.gearthblog.com/blog/archives/2006/08/china_announces.html) - but this encounter also turned up new information for me about how it works.

> __A quick napkin sketch about [map proections](https://en.wikipedia.org/wiki/Map_projection)__: because the world is not actually flat (nor actually spherical, unfortunately), mapmakers rely on mathematical models to transform the world into a two-dimensional representation. And there are thousands of different such models - called datums to represent the shape of the Earth, or projections to represent how that shape is warped onto paper or phone screens - each with a specific application.

My assumption about China's national security concern was that they required a blanket offset - say, a half kilometer or so - between different base data types and real-world coordinates. I also assumed that it was largely optional; if you mostly don't offer services in China ([like my employer](https://geojson.io/#map=16.15/29.57809/118.9399)), you can ignore the offset. 

What I had gotten wrong about this was the consistency, or the guess that the offset was the same distance and direction everywhere, with some curvature-of-the-earth variations. But the actual implementation _is of a randomized offset, baked into a custom datum [designated GCJ-02](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China#GCJ-02)_. All mapping data providers and application developers active in China [must use this datum - or its relatives - as the basis of their maps, and it is technically against the law to provide transforms to more open standards like WGS.](https://web.archive.org/web/20240617102329/https://www.serviceobjects.com/blog/why-gps-coordinates-look-wrong-on-maps-of-china/)

The notes from [this 2011 party bulletin](https://archive.ph/20110804185923/http://cxzy.people.com.cn/GB/196034/14908095.html) about the development of GCJ-02 are a fascinating study of the cultural and political considerations that always float over the heads of cartographers working in their field:

> 'Li Chengming was confident: "In the war years, Communist Party members were not afraid of death, so what is this little difficulty! We must do it! And we must do it beautifully!" Under the guidance of veteran experts, he led his team to work for more than a thousand days and nights to develop a set of nonlinear confidentiality processing technology for topographic maps suitable for national series scales. This technology not only meets the national security confidentiality requirements, but also meets the public's application needs for topographic maps.'

GCJ-02 and its like are not impenetrable. There are leaked documents and [efforts at reverse-engineering](https://github.com/googollee/eviltransform) that make it possible to achieve data interoperability. Perhaps even more interesting is [this rendered transform from Leif Gehrmann](https://github.com/leifgehrmann/gcj02-distortion-map) - essentially a map of how maps are mapped in China:

![2](/shoals/assets/img/2024-07-10_2.png)

I look at this and have to add "impressed" to my "appalled and mesmerized" feelings mentioned above. Obfuscation by datum is not something I would have really considered possible before, and it really is effective at reeling open standards into the net of state control. But cartography has a long and colorful history of serving Truth on the surface and Politics at its heart, and GCJ-02 is just another entry. 