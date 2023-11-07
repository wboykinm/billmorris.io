---
layout: post
title: "Secession & Racism: a Spatial Analysis"
date: "2012-11-25T12:00:00-04:00"
author: "Bill Morris"
cover-img: "/assets/img/2012-11-25_cover.png"
tags: ["politics", "mapping", "elections", "twitter"]
---

Can a state's tendency toward racism determine it's willingness to secede from Barack Obama's America Maybe. There's the short answer. The longer one follows, and please note the many qualifiers before you fire up the Troll-o-Matic 9000.

## Post-Election Racism
It turns out that there was a lot of racist language being bandied about on twitter after the election. And a small group of brilliant individuals elected to post their hate speech with geolocation attached. The good folks at Floating Sheep [were there to catch it all](https://web.archive.org/web/20121127105638/http://www.floatingsheep.org/2012/11/mapping-racist-tweets-in-response-to.html) and they boiled it down to a normalized index of the prevalence of racist tweets about the election by state:

![1](/shoals/assets/img/2012-11-25_1.png)

A very small number of people in Alabama and Mississippi don't come out of this analysis looking very good. But the point here is that among social media users, Alabamans and Mississippians are slightly more likely than others to vent about the election using hate speech.

<hr>

## Post-Election Support for Secession
At the same time, citizens of some (initially Southern) states [initiated online petitions](https://web.archive.org/web/20130303053426/https://petitions.whitehouse.gov/petition/peacefully-grant-state-oklahoma-withdraw-united-states-america-and-create-its-own-new-government/Z0G2vNtF) calling for peaceful separation from the United States, AKA secession. These petitions have quickly spread to every state in the union, but the number of signatures varies wildly. As of this writing, Texas has over 100,000 signatures on its petition, while Vermont has 869 [and [some colorful arguments have been made](https://web.archive.org/web/20130228222358/http://www.star-telegram.com/2012/11/08/4399621/hardin-county-gop-official-wants.html) about keeping these specific two in separate countries].

Obviously you can't compare these two numbers on the same plane. To get a picture of the real support for secession in each state, I normalized the number of signatures by the state population in 2011 per census estimates:

![2](/shoals/assets/img/2012-11-25_2.png)

Balanced by 25 million people, Texas is actually not quite as hot for a second republic as the petition might suggest. The northern rockies on the the other hand are desperate to escape, with a much as ONE AND A HALF PERCENT of the states' populations showing up on a secession petition (yes, this is a tiny percentage). The only states with no stomach for independence are pretty close to the map that John Kerry won in 2004 (with the odd inclusion of Virginia). This is fascinating on its own, but let's dig deeper . . .

## Why do you really want to secede? I mean, _really_ why?
All well and good, I thought, but what sort of motivations drive someone to sign onto an idea that [half a million Americans died over](http://en.wikipedia.org/wiki/American_Civil_War) not so long ago? There are as many explanations as pundits to make them up: culture, climate, economics, and one that comes up every now and then: __racism.__

So much [coded language](https://web.archive.org/web/20120121011204/http://www.balloon-juice.com/2012/01/17/let-lee-decode-the-2012-campaign-for-you/) was thrown around during the election cycle that "Welfare" translated as "Greedy Black People" and "States' Rights" translated to "White Power" to some who were inclined to hear it. In such an environment it's not inconceivable that some citizens would rather leave the U.S.A. than dwell another four years under a president whose legitimacy was so exhaustively questioned.

Relationships like that are extremely difficult to tease out. There are potentially hundreds of factors driving an individual's decision to sign a petition like this, and the president's ethnicity may be only the smallest one - if it's present in the calculation at all. Colinearity is the term the statisticians like to throw around: you think you've got a significant relationship between two variables, but it's really a parallel factor that you forgot to measure.

Therefore, a non-exhaustive list of caveats before I get to any results:

- Fewer than 400 geolocated tweets included both racist language and a reference to the election. This is a tiny number compared to the overall election-related traffic, and [Floating Sheep has made this clear in their analysis.](https://web.archive.org/web/20121127105638/http://www.floatingsheep.org/2012/11/mapping-racist-tweets-in-response-to.html) The author of that post judiciously used the term "Thin nail to hang on" in reference to my use of his dataset. That said, there was also a significant amount of non-geolocated twitter traffic using hate speech in the days after the election, so these are representative of a larger tone if not of a geographic location.
- Signatories to these secession petitions are not all residents of the state in question. About 3/4 of the Texas petition participants appear to be Texans, while only about 1/4 of Oklahoma signatories are locals. Without a good way to sort out locals-only, I just included the total number on each petition and in doing so introduced more error. 
- The analysis method I use below doesn't eliminate colinearity. It just suggests where it might be strong and where it might be weak. It's possible that racists in Georgia really love pandas, and it's actually the broader panda-loving population there that wants to secede so that the federal government can't seize any Georgian pandas.
- Similarly, this analysis helps with - but does not eliminate - [the modifiable areal unit problem.](http://en.wikipedia.org/wiki/Modifiable_areal_unit_problem)
- Alaska and Hawaii have secession petitions too, but their non-contiguity with the lower 50 skews the results.
- This is only scratching the surface. If there's a grad student out there with funding and no project, I invite them to burn time improving the input data.
- More as they occur to me . . .

With these qualifiers in mind, let's look at the straight-up linear relationship between racist tweeting and secession-petition-signing. The big question I'm asking here is 

> Can a state's tendency toward racism determine it's willingness to secede from Barack Obama's America? 

And I'm not answering that question; I'm answering a highly-qualified version of it based on the data I have available. Plus it's kind of a nutty question.

And at the national level, the answer to the question is __no__:

![3](/shoals/assets/img/2012-11-25_3.png)

This "relationship" at the national level is not significant at any useful confidence interval, and it sports only the tiniest of trends (P = 0.36, R-squared = 0.017).

Before I lose the rest of you, let me say this: The answer to the above question could still be "maybe".

There's a statistical tactic available called [Geographically-weighted regression (GWR)](https://web.archive.org/web/20151102053619/https://www.jstor.org/stable/2988625); it's best described as a diagnostic tool to figure out how relationships like this can vary over distance. Instead of measuring the relationship between racism and secession at the national scale, we can look at it regionally to tease out places where it might be valid:

![4](/shoals/assets/img/2012-11-25_4.png)

<small>This map shows where it's possible that the prevalence of racist post-election tweets can predict the local support for secession.</small>

Cutting through the fog of colinearity, we're left with four states that exhibit the signs of correlation between racism and secession: Kentucky, Tennessee, Georgia and Florida. Anecdotally this isn't nuts; [the very real secessionist movements in Northern New England](https://web.archive.org/web/20121210190614/http://www.time.com/time/specials/packages/article/0,28804,2041365_2041364_2041351,00.html) express an odd motivating mix of social liberalism and Rand-ian libertarianism. On the other hand the Southern states actually did secede once, and whether you give it a Marxist reading or not, the resulting war was about the intertwining of race and governance. The banner-bearers of southern secession before this petition fracas included [not a few white supremacist groups.](https://web.archive.org/web/20100602201744/http://www.splcenter.org/get-informed/intelligence-files/ideology/neo-confederate)

Many on the political left are trigger-happy with the use of racism as an explanation for any opposition to the president. The above analysis shows that this may be the case in some places. However, it must be pointed out that it also shows there is no strong link between racism and secession (using proxy terms here) in many "red states", including Texas and Mississippi. Other factors not analyzed here are most likely driving the petitions in those states. This is not to say there's no racist twitter activity in Texas, just that it's not really correlated with support for secession.

Here's the qualified conclusion born of all this flying data:

__In a few southern states it is possible that the drive to secede from the United States is being informed by racism on some level.__ 

This is surely news to no one, but I thought it would be useful to look at the statistical underpinnings of it. Make of this what you will.

<small>Cover image: detail from "Map of the city of Staunton, Augusta Co., Va. By Jed. Hotchkiss, Top. Eng. 1884 (1885)", via [David Rumsey Map Collection](https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~33726~1171442:confederate?annotId=340438957)</small>
