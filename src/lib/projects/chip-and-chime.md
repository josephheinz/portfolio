---
n: "04"
title: Chip & Chime
kind: Open Source
initials: CC
blurb: An accessible component kit with 2.1k stars — docs, tokens, and Storybook are mine.
tags: TypeScript · Storybook · a11y
cover: /projects/chip-and-chime/cover.jpg
---

## Overview

Chip & Chime is an open-source UI component library focused on accessibility first. It started as an internal design system at a previous job and was open-sourced after three years of internal use. As of now it has 2.1k GitHub stars and is used in production at a handful of small startups.

The library ships 48 components — from primitives like Button and Input to complex patterns like Combobox, DatePicker, and a fully accessible DataTable. Every component is WCAG 2.1 AA tested, ships with a Storybook story, and documents keyboard interaction patterns explicitly.

## My Role

I didn't build the library alone — the core component implementations came from a team of four. My specific contributions were:

- The **design token system**: a three-tier token architecture (global → semantic → component) that lets consumers theme the entire library by swapping a single CSS layer. I wrote the token generation pipeline that produces CSS custom properties, JS constants, and Tailwind preset from a single JSON source of truth.
- The **documentation site**: a custom MDX-based site with live component sandboxes, keyboard interaction tables, and an accessibility audit panel that runs axe-core on the rendered example and reports violations inline.
- **Storybook integration**: configured Storybook with A11y addon, Actions, and a custom theme story pattern that lets contributors preview components against different token sets without writing extra stories.
- **Release automation**: semantic-release pipeline that generates changelogs, publishes to npm, and syncs docs on merge to main.

## Challenges

The token system was the most design-intensive work. The challenge is that tokens need to be expressive enough for consumers to theme meaningfully, but not so granular that every component needs its own undocumented override surface. I landed on a three-tier model after trying two other approaches: too flat (consumers couldn't theme individual components without `!important`) and too granular (50+ tokens per component, impossible to maintain).

The documentation sandbox was technically interesting — rendering untrusted user-edited code in the browser without bundling Webpack in the client. I built a sandboxed iframe executor that takes raw JSX, transpiles it in a Web Worker with Sucrase, and posts the result to the iframe for React to mount. Execution stays isolated from the host page.

## Outcome

2.1k stars organically (no Product Hunt launch, just word of mouth). The project gets roughly 12k npm weekly downloads. Three PRs merged from external contributors in the last six months. The design token system specifically has been forked into two other open-source projects.
