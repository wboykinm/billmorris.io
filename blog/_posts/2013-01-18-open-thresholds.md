---
layout: post
title: "Open thresholds"
date: "2013-01-18T12:00:00-04:00"
author: "Bill Morris"
cover-img: "/assets/img/2013-01-18_cover.png"
tags: ["politics", "mapping", "open data", "twitter", "journalism"]
subtitle: "They went too far, clearly."
---

In [publishing the precise locations and names](http://www.lohud.com/interactive/article/20121223/NEWS01/121221011/Map-Where-gun-permits-your-neighborhood-?nclick_check=1) of all the permitted handgun owners in two New York Counties, the New York Journal-News has done a serious disservice to data journalists in particular. More broadly, they may have made things more difficult for the "Open Data" community at large.

![1](/shoals/assets/img/2013-01-18_1.jpeg)

<small>Got guns?</small>

But a lot of ink and rage has already been leveled at the J-N for this; [in the New York Times](https://web.archive.org/web/20130117084606/http://www.nytimes.com/2013/01/14/business/media/guns-maps-and-disturbing-data.html), David Carr pointed out that even in an era of minimized privacy this was a step too far, lacking in due diligence. Jeff Sonderman in Poynter [noted that the context matters kind of a lot](https://web.archive.org/web/20130316031950/http://www.poynter.org/how-tos/digital-strategies/199834/programmers-explain-how-to-turn-data-into-journalism-why-that-matters-after-gun-permit-data-publishing/) - that the timing and lack of justification seemed to associate the mapped gun owners with the Sandy Hook massacre. Sonderman also had sage words for those sitting on piles of prospective open-data boodle:

> If you can’t come up with a better reason than 'because we can' or 'because we think it would look cool,' stop here, you’re about to data dump.

So the smarter folks have weighed in on the implications for journalism and data management, but this awkward business leaves me with two HUMUNGO-GONZO TAKE-HOME MESSAGES for the geographic opendata community:

## Aggregate to Support the Story.
We - as a society - are flat-out not comfortable with publishing the name and location of individuals. At the very least strip the identifiers out of your points; better still, aggregate the points to coarser-scale geographic units. Census blocks work fantastically well for detailed data like this, and I hear that [hexagonal bins are all the rage these days](https://web.archive.org/web/20161221043446/http://dai.geosprocket.com/3d/fly/). More importantly, the coarser scale brings context and emphasizes patterns; that's where the story is at.

## QA/QC, Punks.
Google's Fusion Tables product - for all its awesomeness - is an extremely blunt instrument for data journalism. Styles, filters and deployment are all very limited for getting your message out. But fusion tables also make it a little too easy to presume accuracy. The handgun ownership maps were piped through the Google geocoding engine (by all accounts the most accurate one out there today) and deposited in their supposed locations on the map. The Journal-News may have tried to clean up the output before publishing, but they didn't catch a few that missed their targets and landed in Burbank and Houston. If you're going to publish something like this, sloppiness is profoundly unhelpful.

![2](/shoals/assets/img/2013-01-18_2.jpeg)

<small>Yeah, that guy doesn't live there.</small>

Geosprocket built an application for the Burlington Free Press (coincidentally a sister publication of the Journal-News; don't run out of free article views now!) in late 2012, in which [we tried to show the month-to-month patterns of burglaries in the city of Burlington.](http://www.burlingtonfreepress.com/interactive/article/20120930/NEWS02/309300021/Interactive-map-Burlington-burglary-data) The data was provided by the BPD in response to a FOIA request by the Free Press, and it was extremely specific - down to the address of the incident. The context and story were clear - there's a February bump in Nighttime Burglaries - and we tailored the visualization to focus on that pattern.

![3](/shoals/assets/img/2013-01-18_3.jpeg)

At the time I thought we were being conscientious by stripping out the address text and using only the badge number of the responding officer, but in retrospect I would have aggregated these to the census block level. With the cool tools available today, it's a relative snap to make a polygon flash every time an incident occurs, and let the incidents stack up in accumulated color (though not so much of a snap that I'll do it for a blog post).

Basically, the Journal-News handgun owners' map has caused me to rethink a few of my own methods, and I hope provided us all with a sense of the threshold between responsible data journalism and data dumping.

<small>Cover image: detail from "Carte de la Confederation Germanique, 1834. No. 45 bis. Grave par Thierry. Ecrit par Jules Berthelemier.", via [David Rumsey Map Collection](https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~34613~1180225:guns?annotId=300674113)</small>