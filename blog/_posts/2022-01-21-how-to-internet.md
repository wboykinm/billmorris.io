---
layout: post
title: "How to deploy a webpage in 2022"
date: "2022-01-21T17:13:15-04:00"
author: "Bill Morris"
cover: "/assets/img/2022-01-21_Confusion_of_Tongues_Dore.png"
tags: ["web", "blog", "dns"]
description: "Instructions for getting a [mostly] static website onto a custom domain, with `https` encryption, for [mostly] free."
showFullContent: false
readingTime: true
hideComments: true
---

![1](/assets/img/2022-01-21_Confusion_of_Tongues_Dore.png)

Instructions for getting a [mostly] static website onto a custom domain, with `https` encryption, for [mostly] free. 

I'm finally writing this down after getting stuck on step 10 way too many times. Godspeed.

1. Purchase the top-level domain - [gandi.net](https://www.gandi.net/en-US/domain) is my current preferred registrar. Hopefully this will be the only cash you drop in this process.
2. Create a new public repository [on github](https://github.com/new).
3. Clone the new repo locally and create your [site content package](https://github.com/wboykinm/wintry-mix), even starting with something as simple as a standalone `index.html`.
4. Add [a file called `CNAME`](https://github.com/wboykinm/wintry-mix/blob/master/CNAME) to the repo, containing only a single line with your just-purchased domain in it. e.g. `domain.com`.
5. Commit the content to github.
6. In the settings --> pages menu of the repository on github.com, point to the correct branch, and enter the domain under "Custom domain".
7. On [Cloudflare](https://dash.cloudflare.com/), select "Add a site".
8. Enter the domain, choose a free plan, and check that the detected `A` and `CNAME` records are listed as "proxied".
9. On the registrar's domain management console, change the default nameservers to the Cloudflare nameservers provided (e.g. `david.ns.cloudflare.com`).
10. Go to the DNS tab of the newly-added domain dashboard on Cloudflare, and change the `A` record IP address [to one of the currently-listed github IPs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).
11. Wait up to a day for it all to settle into place, though in practice it tends to just be a few minutes.