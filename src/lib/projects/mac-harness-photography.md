---
n: "01"
title: Mac Harness Photography
kind: Web App
initials: MH
blurb: A photography portfolio site built for a local photographer — clean galleries, fast loads, and a contact flow that actually converts.
tags: Svelte · SvelteKit · Vercel
---

## Overview

Mac Harness Photography is a client portfolio site built for a local photographer. The goal was to let the work speak for itself — minimal chrome, fast image loading, and a layout that holds up from mobile to wide desktop without feeling like a generic template.

The live site is deployed on Vercel at [mac-harness-photography.vercel.app](https://mac-harness-photography.vercel.app).

## My Role

I designed and built the full site solo. That included the gallery layout, responsive image handling, and the contact form. I also handled the Vercel deployment pipeline and domain config.

Image performance was a focus — I used SvelteKit's image optimization patterns alongside lazy loading to keep LCP competitive on image-heavy pages without sacrificing visual quality.

## Challenges

Photography sites live or die on image presentation. The biggest challenge was building a gallery that feels polished at every viewport without requiring per-breakpoint art direction for every photo. I solved this with a masonry-style grid driven by CSS columns, with a lightbox overlay built entirely in Svelte — no third-party dependency, which kept bundle size small.

The contact form needed to be functional without a dedicated backend. I wired it through a serverless function on Vercel, with validation on both client and server sides.

## Outcome

Delivered a fast, responsive portfolio site the client could actually use and maintain. Lighthouse performance scores consistently above 95 on mobile.
