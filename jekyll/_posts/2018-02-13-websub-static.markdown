---
layout: post
title: "Sending WebSub notifications from static sites using Netlify functions"
date: "2018-02-13 16:33:46 -0500"
comments: true
syndication:
- https://twitter.com/anarchivist/status/963540419408744454
- https://news.indieweb.org/en
- https://chaos.social/@anarchivist/99524168687151250
---

As part of my [iterative intentions for 2018]({{ site.baseurl }}{% link _posts/2018-01-01-iterative-intentions.markdown %}), I started a project to rebuild and simplify my website. I've used Jekyll for quite some time (either by itself or with Octopress), and as part of the latest iteration of the site, I've been working to align the site more with [Indieweb](https://indieweb.org/) principles, and to smooth the deployment path for my site by hosting it on [Netlify](https://netlify.com/).

One challenge with Jekyll and other static site generators is that "dynamic-ish" functionality, including sending notifications through protocols like [WebSub](https://websub.rocks/). The trouble is knowing where these actions fit into the build process for your site: you don't want to send the notifications before your site gets built, or pushed to the <abbr title="content delivery network">CDN</abbr> hosting your site. Recently, Netlify announced a private beta for its new [Netlify Functions](https://functions-beta--www.netlify.com/docs/lambda-functions/) service, which provides lambda-style functions deployed as part of your site deployment. One of the neat features that exists as of the beta is the ability to [trigger the functions via Netlify events](https://functions-beta--www.netlify.com/docs/lambda-functions/#event-triggered-functions), like when your site successfully deploys. <!--more-->

As a beta service, some of the features are still somewhat rough around the edges (not to mention the documentation). Nonetheless  I was able to get a proof of concept working pretty quickly, as I flew from California to DC for [Code4lib2018](http://2018.code4lib.org/){:.h-event}. So, what does this look like in practice? I used [netlify-lambda](https://github.com/netlify/netlify-lambda) to help me build out the function locally. The [code itself](https://github.com/anarchivist/matienzo.org/blob/master/_functions/deploy-succeeded.js) is fairly simple and is fired on a `deploy-succeeded` event: it checks to see if the deploy happened in production, attempts to ping my [Superfeedr](https://superfeedr.com/publisher) hub, and handles errors somewhat gracefully, with some light logging for debugging. I did a little refactoring based on [Alex MacArthur's post](https://macarthur.me/posts/building-a-lambda-function-with-netlify/) on building Netlify lambdas, which helped me think through some of the complexity on dealing with Netlify build environment variables. I couldn't get that to work quite right, so I'm [using `sed` to inject the variable's value](https://github.com/anarchivist/matienzo.org/blob/master/bin/build) instead. Not pretty, but it works (for now).

This has been a great deal of fun to experiment with, and at some point, I'm hoping to experiment by adding the ability to send Webmention requests directly from this or a similar function as well. If you're a Netlify user and would like to experiment during the Netlify Functions beta, you can [request access](https://app.netlify.com/functions-beta).
