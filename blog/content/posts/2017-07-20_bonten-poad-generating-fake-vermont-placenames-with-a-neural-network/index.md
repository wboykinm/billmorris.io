---
title: "Bonten Poad: Generating fake Vermont placenames with a neural network"
author: "Bill Morris"
date: 2017-07-20T13:07:25.594Z
lastmod: 2019-07-19T09:09:37-04:00

description: ""

subtitle: "Y’all, we’ve entered a computing epoch when AI is available to us at nearly the level of commodity entertainment. Take this experiment in…"

image: "/posts/2017-07-20_bonten-poad-generating-fake-vermont-placenames-with-a-neural-network/images/1.jpeg" 
images:
 - "/posts/2017-07-20_bonten-poad-generating-fake-vermont-placenames-with-a-neural-network/images/1.jpeg" 


aliases:
    - "/bonten-poad-generating-fake-vermont-placenames-with-a-neural-network-ce0e8f90afbb"
---

![image](/posts/2017-07-20_bonten-poad-generating-fake-vermont-placenames-with-a-neural-network/images/1.jpeg)

> “Yup, take the Pendoil bridge just past Sad Cahue Village, and you’ll be up ta’ Ponkey before ya know it!”


Y’all, we’ve entered a computing epoch when AI is available to us at nearly the level of commodity entertainment. Take this [experiment in generative British placenames](https://medium.com/@hondanhon/i-trained-a-neural-net-to-generate-british-placenames-9460e907e4e9) by [Dan Hon](https://twitter.com/hondanhon); his workflow is **7 goddamn steps** to use technology only the likes of Alan Turing could have dreamed up, until a few years ago.

Dan used a multi-layer recurrent neural net to come up with imaginary locales like “Buchraston-on-Ter-Sey”, so I thought I give it a shot and see what a complex algorithm could do with a state that includes “Ira”, “Lympus”, and “Satan’s Kingdom” IRL. Here are the choicest results of the [several thousand](https://gist.github.com/wboykinm/51de3208f0ab9bf00cdfac42b2fd07ec) I generated; they look more Welsh than I would have expected:

*   Cellen Boneyboas
*   Macih Pond
*   Pendoil
*   Ralas Port
*   ClintCtow
*   Wi
*   Wont
*   Cissham Bond
*   Whortdlay Pond
*   Sad Cahue
*   Coal Bontewlu Porn
*   Bent Pond
*   Hicton
*   Mash dank Mount
*   Goryhy Pond
*   Ha
*   Dondslon
*   Dorits Wat Poon
*   Cold Bamronr
*   Wot Ponde
*   Claylelon
*   Golen
*   Cllen Boneyboas
*   Rut anvill
*   Ponk
*   Chomtax Bastarr
*   Lentrenston
*   Wershrok Modanton
*   Bonten Poad
*   Ponkey
*   Wasdesh
*   Vontfalilina
*   Kart Pond
*   Poon Welton
*   Hate Zonord
*   Cowrelu
*   Mu

Now, these don’t exactly meet my not-totally-formulated standard for “Vermontyness”, but that’s the nature of machine learning in this case: [it’s about figuring out the question using a series of answers.](https://blog.vivekpanyam.com/deep-learning-made-simple-part-1/) And to be fair, Vermont’s placenames aren’t that distinct (at least by the standards of the Northeastern U.S.): mostly English place and family names, with a very small smattering of French and Abenaki. Also, the fact that both “Ponk” and “Ponkey” show up here tells me that my training set might be a tad small — only [~2000 placenames](http://geodata.vermont.gov/datasets/vt-geographic-names) went into the model — but overall this is good fun.

Many thanks to Justin Johnson (whose work [I’ve benefitted from before](https://medium.com/planet-stories/drawing-the-planet-in-brushstrokes-bc54a686fb30)) and Cristian Baldi for making such accessible tools in the brave new world of machine learning.

Try it out yourselves: [here’s a docker image with everything you need](https://github.com/crisbal/docker-torch-rnn)!
