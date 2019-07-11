---
title: Caught in the Cartographic Crossfire
date: 2015-04-24
tags:
cover_image: images/default.jpg
---

_The work of a vandal reminds us what’s missing from the map._

## The incident</center>

This morning [Ahmad Babar noticed](https://www.facebook.com/photo.php?fbid=10155581320805122&set=a.10151572005255122.853730.546895121&type=1&comment_id=10155581348305122&offset=0&total_comments=5&ref=notif&notif_t=photo_reply) a curious feature on Google Maps just South of Rawalpindi, Pakistan:

![Dammit, Calvin.](https://cdn-images-1.medium.com/max/2000/1*6FIYzEQtQGyzfL4eO72aHg.gif)*Dammit, Calvin.*

Yes indeed — an android pissing on an Apple logo, rendered in the color that Google typically uses to signify a park or natural area. It was a part of the basemap! The internet [howled with glee](http://mashable.com/2015/04/24/android-bot-peeing-on-apple-logo-google-maps/?utm_cid=mash-com-Tw-main-link):

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Apparently it&#39;s Apple-watering season in Pakistan... HT <a href="https://twitter.com/bill_slawski?ref_src=twsrc%5Etfw">@bill_slawski</a> C <a href="https://twitter.com/googlemaps?ref_src=twsrc%5Etfw">@googlemaps</a>  <a href="https://t.co/oMflab265q">https://t.co/oMflab265q</a></p>&mdash; Nato (Nate Orshan) (@Winooski) <a href="https://twitter.com/Winooski/status/591626210800730112?ref_src=twsrc%5Etfw">April 24, 2015</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

. . . and the discoveries continued:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Second debacle... I think Google Maps is hacked! <a href="https://t.co/mv6NRAWBr3">https://t.co/mv6NRAWBr3</a> <a href="http://t.co/sZTDz5mT7H">pic.twitter.com/sZTDz5mT7H</a></p>&mdash; Himanshu Chanda (@himanshuchanda) <a href="https://twitter.com/himanshuchanda/status/591613349441314817?ref_src=twsrc%5Etfw">April 24, 2015</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">There seems to be a Skype logo in Google Maps around Lahore, Pakistan” as well <a href="http://t.co/132uURHnHp">pic.twitter.com/132uURHnHp</a></p>&mdash; Christian Zibreg (@dujkan) <a href="https://twitter.com/dujkan/status/591633658882215936?ref_src=twsrc%5Etfw">April 24, 2015</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



## How the android got there</center>

Google is constantly pulling in map data from 3rd party vendors, and they have [their own massive data operation](http://www.wired.com/2014/12/google-maps-ground-truth/), but this most likely came from a user-submitted edit to the [Google Mapmaker system](http://www.google.com/mapmaker). Ostensibly a crowdsourcing project, Google asks users to add local knowledge to the map directly. This means everything from business names to one-way street restrictions most of the time, but users can also add big polygons like parks. Or, y’know, huge logos.

The official Google process for allowing these map edits involves a verification step. Sometimes it’s a Google employee, more often it’s an approved volunteer with local knowledge, but someone has to hit an “approved” button before a user edit makes it onto the map. That process broke down this time.


## Two reasons why this matters</center>

### It shows that Google’s data isn’t perfect.

For nearly a decade now, Google has been the recognized leader in map accuracy and utility. When Apple [tried to cut the cord](http://www.apple.com/au/letter-from-tim-cook-on-maps/) and created it’s own maps, they famously and awkwardly learned how hard it really was to make a high-quality geographic database (and how much money Google must have thrown at the problem).

This leadership has made Google sort of cocky in some ways. In conversations with their sales staff (as you might expect), I’ve heard plenty of contempt for my own preferred map database, [OpenStreetmap](http://www.osm.org) (OSM). OSM is often described as “The Wikipedia of Maps”, and it differs from Google maps in a key way: the users and the public own the data. Contributions to Google Mapmaker by contrast are owned by Google alone.

![OpenStreetmap (left) vs Google Maps (right) in Juba, South Sudan](https://cdn-images-1.medium.com/max/5092/1*Gr1rr9fg-HiBL7UMA9W_Ag.png)*OpenStreetmap (left) vs Google Maps (right) in Juba, South Sudan*

But OSM (and Apple, and others) is [catching up](http://thenextweb.com/insider/2014/02/28/openstreetmap/), and in many ways the power of nakedly-open crowdsourcing surpasses Google’s proprietary muscle.

A typical Google criticism of OSM is that — absent verification and dollars spent — the quality is lacking. *Anybody can add anything! That’s chaos!* After today there are at least a few holes in that argument.

### It exposes the painful irony of our maps.

The urinating android (now removed) was drawn on what seemed like an empty spot on the map. Google had little data there, despite the fact that nearby Rawalpindi has a population of six million - so the prankster had plenty of space to work. OSM [isn’t much better](http://www.openstreetmap.org/node/58744442#map=15/33.5174/73.0626&layers=C) in this area. The problem is that the space there is not actually empty. People farm there, build there and live there:

![What lay under the android](https://cdn-images-1.medium.com/max/2908/1*4RbtzavJDQX4BD2Pq7mTEg.png)*What lay under the android*
> # And their land was briefly turned into a battlefield in a pissing contest between two American corporate behemoths.

Whatever the intent, this is a form of casual imperialism, and we usually just miss it completely, seeing nothing in the empty spots on our maps.

![[Kindu, DR Congo](http://tools.geofabrik.de/mc/#17/-2.9558/25.9534&num=2&mt0=google-map&mt1=google-satellite)](https://cdn-images-1.medium.com/max/5088/1*61bXXtjgsHvg0D6RIbfkiA.png)*[Kindu, DR Congo](http://tools.geofabrik.de/mc/#17/-2.9558/25.9534&num=2&mt0=google-map&mt1=google-satellite)*

One of the reasons I like OpenStreetmap is its ability to remedy the problem immediately. If you are so-motivated, you can [add people to the map](http://learnosm.org/en/beginner/introduction/) and make sure they aren’t mistaken for an empty canvas. And for all my complaints about lock-in, Google’s satellite imagery and Streetview tools are incredibly useful for bringing us closer to people we might miss in the cartographic lens (note where the images above came from).

If any journalists are off to write a piece about the people of Shahpur and the logos that were dropped on them, I’m in. We all have a lot to learn about the empty spaces on our maps.

**9 PM Update**: *Google [has apologized](http://thenextweb.com/google/2015/04/24/theres-an-android-peeing-on-apple-on-google-maps-and-we-cant-figure-out-why/?utm_source=t.co&utm_campaign=share%20button&awesm=tnw.to_c4hnl&utm_medium=referral&utm_content=There%27s%20an%20Android%20peeing%20on%20Apple%20on%20Google%20Maps%20and%20we%20can%27t%20figure%20out%20why)! Just not for having fallible data or for obscuring the presence of a small slice of humanity.*

**May 11 Update**: *Google [has suspended Map Maker contributions](http://gizmodo.com/google-maps-shows-an-android-robot-taking-a-big-pee-on-1699938922/1703615498/+knibbs)! This suggests that Google has less bandwidth for edit-moderation-per-volume-of-edits than it would like, and less than OpenStreetmap has.*
