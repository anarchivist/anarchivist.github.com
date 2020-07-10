---
title: netlify-cms-workaround
date: 2018-01-07T03:26:24.816Z
---
{{< figure src="/images/screen%20shot%202018-01-06%20at%207.28.58%20pm.png" caption="Screenshot of Netlify CMS user interface" class="u-photo">}}

a silly workaround was to use a field named `title` that has a label of "Slug" in the netlify-cms config, which then allows you to avoid filename collisions until <https://github.com/netlify/netlify-cms/issues/445> is fixed.
