---
layout: post
title: "Imagination vs. the Moat"
date: 2017-12-20T12:00:00-04:00
author: Bill Morris
cover-img: "/assets/img/2017-12-20_cover.jpeg"
tags: ["mapping", "google", "apple", "osm"]
subtitle: "Some thoughts on Justin O'Beirne's meticulous reverse-engineering of Google's geodata infrastructure"
---

I did some doomsaying last night, and it needs following-up, wrapped around the idea of "imagination". 

![1](/shoals/assets/img/2017-12-20_1.png)

Google has been the mapping incumbent for a decade. They've surprised everyone before with their ability to build a smart, disruptive (ugh) map hack and then capitalize on it. But [the sort of long-view thinking Justin exposes here](https://www.justinobeirne.com/google-maps-moat) is way beyond what I (a lowly map-saltminer) was imagining. Here's what I honestly thought Google was up to over the past ten years to keep their edge:

1. Hire thousands of analysts, to pore over and digitize . . .
2. A big pile of satellite and aerial imagery, while
3. Manually ground-truthing addresses with these nifty Streetview cameras, and
4. Hiring thousands of additional analysts/salesfolk to manage a large DB of POIs.

Bonus, "Wow, they're on the cutting edge", imagined-Google-activities:

- Build custom tools for the 1000s of analysts ("Looks like JOSM!")
- Buy satellites instead of imagery ("So forward-thinking!")
- Experiment with auto-extracting features ("We've been trying since 2002!")

I assumed these things because this is what everyone else has been up to, to one degree or another. Mapping the world is a cumbersome, resource-intensive, largely-manual process. Whew, I'm tired and my hand hurts from all the digitizing.

__Reader, my imagination was puny.__

What Justin makes clear is that Google has vertically-integrated their ubiquitous technology in ways that seem handed down from Carto-Olympus. Google bought satellites (& probably planes & helos), sure, but the buried lede is that they've NAILED DOWN the machine intelligence needed for feature extraction. Their long experience in ML, parallelization, & data organization likely let them brute-force this hard problem.

![1](/shoals/assets/img/2017-12-20_2.jpeg)

_Sidebar: This is a HARD goddamned problem - one that I've worked on - and so this point impresses the hell out of me (and makes me jealous, but hey)._

Google also hired lots of analysts, sure, but they're not likely to be the tip of the mapping spear. Instead, that would be you and me, training a collection of algorithms with our phones in a mad swirl of telemetry and aggro crowdsourcing.

![1](/shoals/assets/img/2017-12-20_3.jpeg)

Google has a huge team grooming their "Places" dataset, sure, but those entries aren't all recorded by someone sitting next to a phone, waiting for Papa Luciano to call in with the location of his pizzeria, because Google has [nailed down that type of feature extraction as well](https://blog.research.google/2017/05/updating-google-maps-with-deep-learning.html).

And most importantly, they're not doing all this in a vacuum, and it's not just for maintenance. Google is integrating these datasets to automate the creation of other datasets, and god knows what else.

![1](/shoals/assets/img/2017-12-20_4.jpeg)

They're doing these things in a properly-imagined effort to map our world at the highest spatial, temporal, and social resolutions we've ever dreamed of. (Contact your local Borges or Saramagó enthusiast today)

_(FOR PROFIT)_

And at this point I need to take a step back and say again that this is all sort of awe-inspiring. I am amazed at the grandeur of it all. I'm envious, because my own imagination was only nibbling around the edges of this holistic approach. I'm also frightened. This is a lot of power, and it's concentrated by a company that has built some of the most restrictive walls in the business around its data and services.

![1](/shoals/assets/img/2017-12-20_5.jpeg)

I'm frightened, but in a bleak-comedy kind of way, when I consider how far behind the competition is, and how little they collaborate. Apple? HERE? Uber? How many smart folks are doing the carto-labor of Sisyphus in back rooms right now? I'm frightened when I consider that my own favorite windmill-tilt-of-a-project - [Openstreetmap](https://www.openstreetmap.org/) - is eating itself alive instead of getting ahead of this tidal wave.

The Google context makes the nonsense politics of OSM . . .

- Driving away newcomers and force multipliers
- Alienating whole demographics
- Dismissing any technology more elaborate than a GPS and a bicycle

. . . frustratingly insignificant but also completely defeating.

I've seen glimmers of Google's approach in the OSM world . . .

- Feature extraction by the Development Seed crew
- Mapbox fusing sources for QA/QC
- Facebook literally donating data

. . . get shot down by an unbendable - if surficially-admirable - John Henry mentality.

But Michelle Lee has a better perspective than I do - we can't stop waving the flag for openness:

![1](/shoals/assets/img/2017-12-20_6.jpeg)

. . . and indeed, Tom Lee thinks it's the only sustainable approach (People not named "Lee" also have good opinions, I know):

![1](/shoals/assets/img/2017-12-20_7.jpeg)

I think I just need to take a minute, 

let this glimpse of the current state of things sink in, 

take a deep breath, 

and then flex my imagination.


