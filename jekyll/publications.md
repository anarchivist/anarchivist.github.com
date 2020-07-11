---
layout: page
title: Publications
footer: false
sidebar: false
---

{% capture pubs %}{% include publications.markdown %}{% endcapture %}
{{ pubs | markdownify }}
