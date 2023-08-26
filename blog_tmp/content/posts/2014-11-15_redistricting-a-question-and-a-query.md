---
title: "Redistricting: A Question and a Query"
author: "Bill Morris"
date: 2014-11-15T04:20:01.732Z
lastmod: 2019-07-19T09:09:10-04:00

description: ""

subtitle: "Alert: Both policy AND technology will be discussed below. Bring both your brains. You’ve been warned."

image: "/posts/2014-11-15_redistricting-a-question-and-a-query/images/2014-11-15_1.jpg" 
images:
 - "/posts/2014-11-15_redistricting-a-question-and-a-query/images/2014-11-15_1.jpg" 
 - "/posts/2014-11-15_redistricting-a-question-and-a-query/images/2014-11-15_2.jpeg" 
 - "/posts/2014-11-15_redistricting-a-question-and-a-query/images/2014-11-15_3.gif" 


aliases:
    - "/redistricting-a-question-and-a-query-7cfd3a870bef"
---

_Alert: Both policy AND technology will be discussed below. Bring both your brains. You’ve been warned._




![image](../images/2014-11-15_1.jpg)

Gotta love the classics



My city is on the tail end of the country’s redistricting cycle. Somehow while Texas was [marginalizing Latinos](http://www.huffingtonpost.com/2012/08/28/texas-redistricting-discriminated-latino-voters_n_1838030.html) and Dennis Kucinich was [getting scribbled out of his constituency](http://news.firedoglake.com/2012/03/07/kucinich-squeezed-out-by-redistricting-loses-primary-to-kaptur-in-ohio/), we here in Burlington were [waffling](http://7d.blogs.com/offmessage/2013/12/burlington-city-council-mulls-redistricting-take-457.html) over how to deal with triparty politics and the implications of our changing neighborhoods.




![image](../images/2014-11-15_2.jpeg)



I was unrealistic early on about how much of a role technology could play in the process. A [survey of neighborhood geographic identity](http://btvhoods.geosprocket.org/results2.html) and a do-it-yourself redistricting app (sidebar) were helpful but not game-changing. After years of wrangling, the parties mostly just hashed it out in committee (though the final plan is derived from one made with our [DistrictBuilder](http://www.publicmapping.org/Home) app), and now in about 6 weeks the voters will approve or reject it.

Which brings me to the question: What would the proposed plan change things for the average BTV citizen? It’s a pretty easy one to answer in the aggregate — all the information is out there: new boundaries, old boundaries, population distribution, polling locations. But these bits are spread out across various sites and articles.

What if there was a way to just ask the question: **How will this change things for me?**

Under the umbrella of [CodeForBTV](http://codeforbtv.org/) — the local CodeforAmerica brigade — I put together [the basic answering tool](http://codeforbtv.org/votefinder/). Built for phones (via Bootstrap), the app lets the user plug in their address and get back a list of redistricting plan implications:




![image](../images/2014-11-15_3.gif)



The question of individual impact can be answered with a simple spatial query: return some pieces of information based on the polygons that intersect the user’s location. This pointed to some basic building blocks:

*   The [city redistricting plan](https://gist.github.com/wboykinm/7ef57cd1e58fc626ee3c#file-map-geojson) — both the old wards and the new ones lumped into one geojson file
*   A robust search engine — I went with the [Google Maps API](https://developers.google.com/maps/) because of the amazing viewport-biased geocoding and the built-in typeahead, but given more time I would use [Leaflet](http://leafletjs.com/) and a [state-hosted geocoder](http://vcgi.vermont.gov/warehouse/web_services/geocoding) plus [typeahead.js](http://twitter.github.io/typeahead.js/)
*   Spatial query capability — fortunately [CartoDB](http://developers.cartodb.com/documentation/cartodb-js.html) offers all the magic of PostGIS at a URL endpoint, with great styling available as well.

The user-selected address gets converted to lat/lon, then [sent to the CartoDB API in an ST_Intersects() query](https://github.com/codeforbtv/votefinder/blob/master/votefind.js#L57). It returns a map overlay of the old and new district boundaries at the site, and a set of answers to some FAQs about redistricting. It’s a simple app, relying on some robust APIs. I hope it’s useful in getting my neighbors oriented to the landscape of the proposed redistricting. At the very least it’ll save people some time peering at a large paper map in city hall, and at best it’ll head off 40,000 individual “how will this affect me” emails directed at the city councilors and GIS manager. I also hope it’ll be of use to anyone else who wants to present geographic change over time at a user-selected location.

Get the code [on github](https://github.com/codeforbtv/votefinder)._Originally published at_ [_geosprocket.blogspot.com_](http://geosprocket.blogspot.com/2014/01/redistricting-question-and-query.html) _on January 15, 2014._
