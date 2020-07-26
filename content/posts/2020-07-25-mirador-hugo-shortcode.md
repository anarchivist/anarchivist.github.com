---
title: "A Hugo shortcode for embedding Mirador"
date: 2020-07-25T19:38:46-07:00
tags:
- iiif
- hugo
slug: mirador-hugo-shortcode
syndication:
- https://twitter.com/anarchivist/status/1287221566128914432
- https://code4lib.social/@anarchivist/104577926023087917
- https://chaos.social/@anarchivist/104577938986733044
---

I spent a little time over the last day or so trying to bodge together a shortcode for Hugo to embed an instance of [Mirador](https://projectmirador.org/). While it's not quite as simple (or full-featured) as I'd like, it's nonetheless a starting point. The shortcode generates a snippet of HTML that gets loaded into Hugo pages, but (unfortunately) most of the heavy lifting is done by a separate static page that gets included as an `<iframe/>` within the page. That page parses URL parameters to pass some of the parameters when Mirador gets instantiated.

Getting a consistent way to load multiple IIIF manifests, either into comparison view or for populating a resource list also needs some work, which also led me to grapple with thinking through the [IIIF Content State API](https://iiif.io/api/content-state/0.2/) spec, which will require some more attention, too.<!--more-->

```
{{</*
  mirador
  manifest="https://cdm15799.contentdm.oclc.org/iiif/info/p15799coll41/1738/manifest.json"
*/>}}
```

{{< mirador manifest="https://cdm15799.contentdm.oclc.org/iiif/info/p15799coll41/1738/manifest.json" >}}

```
{{</*
  mirador
  manifest="https://iiif.archivelab.org/iiif/m8coastalsanmateoc138calirich/manifest.json"
*/>}}
```

{{< mirador manifest="https://iiif.archivelab.org/iiif/m8coastalsanmateoc138calirich/manifest.json" >}}

Hopefully, this might be of use to someone other than me, but in any event, it's been an enjoyable way to understand the subtleties of Go templates.
