---
layout: post
title: "Meaningful Communion"
date: "2025-08-11T08:00:00-04:00"
author: "Bill Morris"
cover-img: "/assets/img/2025-08-11_cover.jpg"
tags: ["maps", "writing", "ai", "llm", "engineering"]
---

We're neck-deep in AI these days, the era of the Large Language Model (LLM). It's [all over the news](https://www.nytimes.com/interactive/2025/08/11/upshot/ai-jobs.html), but also in many of our day to day tasks, as the digital products threaded through our lives race to catch up. I'm not sure I've ever in my lifetime seen a technology adopted so fast, both organically and pushed from above. So here we all are, familiar with these fundamentally-predictive machines; my opinion is one among a billion. So this feels more like a testimony for the record:

I have quickly come to the conclusion that __LLM-generated writing in English is not meaningful for communication between people.__

I mean a few things by this.

## . . . Between people

For two years now I've dabbled in the sort of prompting for text output that made ChatGPT famous. I've observed the results mostly with a sort of pleased detachment - like a fisherman practicing catch-and-release. It's experimentation and appreciation. I've grasped that business emails are almost easier to write myself than to comprehensively prompt, and that my kids [will likely see the death of the five-paragraph essay](https://reason.com/2024/05/30/long-live-the-five-paragraph-essay/). 

But recently I've begun to note when I am the probable recipient of AI-generated writing. It's inconsequential stuff in niche news sites that sold their souls for popup ad revenue long ago, but it feels somehow like I'm the victim of fraud. I don't know, maybe I was hoping for some sort of thoughtful communion, however small, with the intern who was tasked to write a review of Death Stranding 2, or the editor with a thinkpiece on paying NCAA athletes. When instead I find myself descending a chain of paragraphs that [inelegantly expand on a bulleted prompt list](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), I know in my bones I've wasted my time. There's no one on the other end of the line.

That feeling - surely not shared by all, and maybe a sign of nascent age-related inflexibility - is why I'll make the promise that __I will never share AI-generated text in this forum, credited or otherwise__. If you've made the [questionable] choice to read my thoughts here, you can expect that I'll only give you my thoughts.

## . . . Meaning

Not all writing has to be meaningful. This has been true since cuneiform was first used to inscribe a contract for a delivery of wheat four thousand years ago. Communication is often rote, boring, transactional, and formulaic. The business email, the todo list, the feature documentation - all of these seem to me unburdened by the lofty goals of interpersonal meaning. I don't feel troubled if an LLM wrote this kind of material, as I wasn't in search of a capital-r _Reading_ experience; I just want to get a job done.

As it matters less who _wrote_, I see it mattering less who _reads_. I have colleagues who have quickly grasped that [there are now multiple audiences for their work](https://www.kapa.ai/blog/optimizing-technical-documentation-for-llms): people and AI in equal measure. Machine-legibility has long been important in software, but it's usually been through the lens of a markup language or object notation. Now we're all [debatably] speaking the same language. Which brings me to . . .

## . . . In English

This is, at first, strictly a caveat. Questions of expression and translation across different languages can get philosophical [with shocking speed](https://frdelpino.es/ciencia-y-sociedad/en_gb/1-an-ia-that-thinks-in-spanish/). English is my first language, most of the world's second language, and [it's deeply threaded into the predictive foundations](https://arxiv.org/html/2410.15956v3) of LLMs. Spanish is my second language, and I read and write passably in French, but I'm not equipped to evaluate the quality of LLM outputs in either, so I generally don't. That's the caveat.

__However under the umbrella of "language", there's also code.__ The engineers I work and socialize with are intrigued and excited by LLM code generation. With some unease, I find myself there as well. Because:

### The efficiency gains are astonishing. 

I'm not a great engineer. I don't bleed Python type checks or exhale Rust compilers, and mostly that's fine because I know my way around tools and [how to automate tasks using whatever is lying around](https://billmorris.io/shoals/2025/05/09/beautiful-capital.html). However, I am quite slow to write code, constantly looking up documentation and going down procedural dead-ends. With team assistance and good design planning, I can put together a moderately-complex piece of software in a few weeks of work. 

Codegen AI will help me through the same task in a few hours. 

This has also shifted my thinking about the realm of the possible. Projects that had languished on my pipe-dream list - "Man, that would be fun and useful but I'll never have the time" - are now within easier striking distance. I find myself checking things off that list with regularity over the past few months, as codegen has become a part of my workflow.

There are valid concerns about accuracy, security risks, and even [whether or not my perception of the speedup is real](https://arxiv.org/pdf/2507.09089), but I'm awestruck that I can prompt a tool like [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) for an input, an output, and some suggested dependencies, and get a product that works.[^works]

### The model training material is largely open source.

The most fundamental, accurate complaint about AI today is that __it's an engine for stealing from and ultimately replacing artists__. The [lawsuits from publishers](https://www.npr.org/2025/03/26/nx-s1-5288157/new-york-times-openai-copyright-case-goes-forward) [seeking their cut](https://www.reuters.com/business/publisher-ziff-davis-sues-openai-copyright-infringement-2025-04-24/) in the training data arms race can obscure the journalists, authors, painters, musicians and a thousand other creative callings whose work has been lifted, reprocessed, and made to seem easily done.

[Open-source software](https://en.wikipedia.org/wiki/Open-source_software) is a utopian ideal, that - messily - has worked as advertised for decades now. It's not an exaggeration to say that I became an engineer because of the swirling maelstrom of sharing, using, and improving in the OSS ecosystem. The intent of this openness has always been [to encourage collaboration and advancement](https://macwright.com/2025/07/03/epanet-placemark) with a minimum of friction. I'll argue that it makes the use of [specifically open-source] code as LLM training data a valid and even transcendent action, fundamentally different than the theft of copyrighted works from authors whose livelihoods are undercut. I have a vested interest in believing this, I know, but it's a point that I can earnestly defend, for now.[^whoathere]

Lurking behind my enthusiasm is a deep distrust of the companies that provide AI codegen services to me and my colleagues. I don't trust [their motivations](https://blog.samaltman.com/the-gentle-singularity), I don't like [their profligate spending](https://www.theguardian.com/technology/2025/aug/02/big-tech-ai-spending), and I don't like their [flexible](https://www.nytimes.com/2025/08/11/business/dealbook/nvidia-amd-chip-payoff-trump.html) [politics](https://www.cnn.com/2025/07/15/business/us-department-defense-google-musk-xai). My fear isn't that they'll take away my shiny new toys - indeed, they'll be happy to sell those to me as long as they can - but rather that they'll provoke a cold war that forces open source projects to close themselves off to avoid abuse.

# Where do we go from here?

This has all moved so quickly that I can't say what next month, much less next year, will bring. I feel comfortable in the basic principles above: 

- AI isn't a well-suited intermediary for meaningful communication between me and my fellow-humans.
- By contrast, AI is a very apt helper in my communication with computers.

. . . but I expect that the conversations will continue at a ferocious clip. Smart people are saying smart things, and I'm excited to listen and let my views evolve. 

![1](/shoals/assets/img/2025-08-11_1.jpg)
<small>The pace of development is so swift that this 2023 image of fields outside New Carlisle, Indiana is too old to reflect [the 1200-acre AI data center complex that now stands there.](https://www.nytimes.com/2025/06/24/technology/amazon-ai-data-centers.html)</small>

<hr>

[^works]: "Works" is of course subjective, and I recommend [this _incredibly_ entertaining piece by Jj](https://deplet.ing/the-copilot-delusion/) for a snarktastic overview of what you gain and lose by coding with AI.
[^whoathere]: While researching for this piece (myself, not asking some damned AI), I began to wonder how many qualifiers I could reasonably put on a thesis statement. Turns out it's going to have to be a bunch here: 1.) [OSS contributors have argued that LLMs violate even the generous terms of open licenses](https://moginlawllp.com/developers-sue-github-microsoft-and-openai-over-copyright-in-creating-ai-tool-copilot/), 2.) A nonprofit is [attempting to isolate admissable training data in codebases](https://spectrum.ieee.org/coding-ai), 3.) [Something something hypocrisy something](https://wptavern.com/mapbox-gl-js-is-no-longer-open-source)