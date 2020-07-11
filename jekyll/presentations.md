---
layout: page
title: Presentations
footer: false
sidebar: false
---


{% capture prezs %}{% include presentations.markdown %}{% endcapture %}
{{ prezs | markdownify }}
