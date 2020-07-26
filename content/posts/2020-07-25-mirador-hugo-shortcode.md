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

I'd forgotten to include the code for the shortcode in the original version of the post, but here it is. The static page to load Mirador is viewable in [my implementation](/iiif).

```go-html-template
{{- $miradorLink := newScratch -}}
{{- $miradorLink.Set "url" (printf "%s?" ("/iiif" | absURL) ) -}}
{{- with .Get "manifest" -}}
  {{- $miradorLink.Add "url" (printf "iiif-content=%s" .) -}}
{{- end -}}
{{- with .Get "enableWorkspaceControlPanel" -}}
  {{- $miradorLink.Add "url" (printf "&enableWorkspaceControlPanel=%s" .) -}}
{{- end -}}
<div class="mirador">
  <iframe style="width: 100%; height: 50vh;"
    src="{{ $miradorLink.Get "url" }}"></iframe>
  <p>
    <a href="{{ $miradorLink.Get "url" }}" target="_blank">Open in new window</a>
  </p>
</div>
```

Hopefully, this might be of use to someone other than me, but in any event, it's been an enjoyable way to understand the subtleties of Go templates.
