---
n: "02"
title: Bloom CMS
kind: Platform
initials: BL
blurb: A headless content platform with a block editor authors actually enjoy.
tags: Next.js · Go · WebSockets
cover: /projects/bloom-cms/cover.jpg
video: /projects/bloom-cms/demo.mp4
---

## Overview

Bloom is a headless CMS built for editorial teams at mid-sized media companies — the people writing three to ten long-form pieces a day who had grown to hate every CMS they'd been handed. The platform separates authoring from delivery: editors get a focused, distraction-free block editor, while developers query content through a typed GraphQL API.

The project ran for about fourteen months, from initial prototyping through a production launch with a regional news publisher.

## My Role

I owned the block editor front end and the real-time collaboration layer. The editor itself is built on a custom document model (not ProseMirror, not Slate — I evaluated both and concluded the constraints of a media CMS justified a smaller, purpose-built approach). Each block type — paragraph, pull quote, embed, image, table — is an independent Svelte component; authors can drag, reorder, and split them without leaving the keyboard.

Collaboration sync runs over WebSockets through a Go service. I wrote the operational-transform logic for concurrent edits to the same block, with conflict resolution that preserves intent rather than last-write-wins.

## Challenges

Conflict resolution in collaborative text editing is genuinely hard. Two authors editing the same paragraph simultaneously will each apply their own diff against the last known state; naïvely applying both produces corrupted output. I implemented a lightweight OT algorithm that rebases the second edit over the first and surface-level tested it against 200 adversarial concurrent edit pairs before declaring it stable.

The other notable challenge was embed handling. News embeds come from dozens of sources — tweets, YouTube, Instagram, custom iframes — each with different sizing contracts. I wrote a generic sandboxed embed renderer that measures intrinsic aspect ratios via ResizeObserver and locks the layout before the content loads, eliminating cumulative layout shift entirely for all supported providers.

## Outcome

After launch the editorial team reported a 40% reduction in time-to-publish for standard article types. Zero data-loss incidents in the first six months of production. The collaboration feature in particular was called out in an internal retro as the reason two remote authors could now co-write breaking news without emailing drafts back and forth.
