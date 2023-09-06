---
layout: post
title: "A full-throated defense of using Zipcodes for spatial analysis"
date: "2019-08-28T16:16:07-04:00"
author: "Bill Morris"
cover-img: "/shoals/assets/img/2019-08-28_zip.jpeg"
tags: ["spatial analysis", "zipcodes", "data science"]
subtitle: "Psych. It's actually a meek defense."
showFullContent: false
readingTime: true
hideComments: true
---

We, the data-folk of Faraday, agree wholeheartedly with our colleagues at 
Carto on this sensitive issue: In the USA, ZIP codes(™) [are the worst-case scenario base unit for measuring geospatial relationships](https://carto.com/blog/zip-codes-spatial-analysis). Because:

- They're widely-varying in size & shape
- They contain populations that range from 0 into the hundreds of thousands
- They're subject to mind-bogglingly-wide distributions in nearly every metric of human behavior (income, age, etc)

The above post is exhaustive on these points. Read it, then come back. I'll wait.

It's quite clear: ZIP codes are overused, when they should be a last resort. The thing is, though ZIPs should only be used in a worst-case scenario, sometimes you find yourself presented with the worst case. And I'll offer a few gentle nudges of reassurance to you poor souls in such circumstances:

## ZIP/ZCTA

Sure, ZIPs aren't areas, and US Census Bureau ZCTAs aren't the same thing in spirit. But they're close. Like REALLY close. [We measured it](https://faraday.ai/blog/be-not-afraid-of-zctas/); you shouldn't avoid using ZCTAs for analysis solely because they aren't exactly like ZIPs.

## Known entities

While it's lame to blame the zeitgeist, ZIP codes are the only thing your clients will recognize intuitively that breaks a city into smaller components. 

Matt Forrest notes this [in his post](https://carto.com/blog/zip-codes-spatial-analysis):

> Finally, most people know  without looking at a map that zip codes represent a smaller area than a city, but larger than say a neighborhood. Conceptually, they feel small enough to get a very focused view of the world, and big enough to capture enough of a sample size of trends.

> The short answer is that zip codes are easy to find, familiar, and provide a granular enough view of the world (or so we thought).

You have to meet the client in a place they understand if you want to impress on them that there are broader insights available in the study of location. (Though the basic workaround here is to do any analysis at the level of the census block group or smaller, then aggregate.)

## Inflexible tools

Sometimes the use case requires a bad input. 

Yes, it's awful, yes you should recommend changes and build tools to that effect, but some applications will only break down a broad spatial area by ZIP. Want to target an area smaller than the Chicago DMA with Search Engine Marketing (SEM)? Your options are mostly either ZIPs or simple radii (which are arguably worse).

## Be [modestly] afraid

In summary:

It turns out that the compact route along which a human can efficiently carry folded and stapled pieces of information-rich paper is and remains a poor heuristic for human behaviors that you might want to assess or predict.

. . . and . . .

Sometimes you have to use those routes anyway, for the above reasons and many more not detailed here (oh man, did I forget data availability?).

Do so cautiously -

- aggregate from smaller units
- actively assess results for hidden inequalities

. . . but do it when you must.

![1](/shoals/assets/img/2019-08-28_zip.jpeg)


