---
n: "05"
title: Pixel Drifter
kind: Game · side project
initials: PD
blurb: A browser roguelike with procedurally-stitched dungeons and a hand-tuned combat feel.
tags: TypeScript · Canvas · WebAudio
cover: /projects/pixel-drifter/cover.jpg
video: /projects/pixel-drifter/demo.gif
---

## Overview

Pixel Drifter is a browser-based roguelike I built over about eight months of evenings and weekends. It runs entirely in a Canvas 2D context with no game engine — every system from collision detection to spatial audio is written from scratch in TypeScript.

The gameplay loop is classic dungeon-crawler: procedurally generated floors, permadeath, a small arsenal of weapons and abilities, and boss encounters on every fifth floor. The pixel art and sound design are also mine.

## Technical Highlights

**Dungeon generation** uses a combination of BSP room placement and cellular automata corridor carving. Each floor is generated in under 8ms on a mid-range laptop — fast enough to happen mid-transition without a loading screen. I iterated on the corridor algorithm for several weeks to eliminate dead ends and disconnected rooms, which are the two failure modes that make procedural dungeons feel cheap.

**Combat feel** came down almost entirely to juice: frame-perfect hitstop on successful hits (a 3-frame pause that makes impacts land), screen shake with exponential decay, and sprite flicker on damage. None of these affect gameplay logic — they're pure feedback layers — but removing any of them immediately makes the game feel worse. I spent more time tuning these than the actual hit detection.

**Spatial audio** is handled through a lightweight WebAudio wrapper I wrote. Sound sources in world space pan and attenuate based on distance to the player camera. The dungeon's ambient sounds — dripping water, distant growls — also mix through this system, with each room having its own audio "mood" that crossfades as the player moves between them.

## Challenges

Canvas performance with lots of moving sprites was manageable until I added lighting. The lighting system composites a low-resolution shadow map over each frame using `globalCompositeOperation: 'multiply'` — cheap but requires careful layer ordering and caused subtle rendering bugs on some GPU drivers. I ended up adding a tiny compatibility shim that falls back to a pure-JS raycast renderer on affected machines.

## Outcome

Released on itch.io. ~1,400 plays over the first three months, 4.6/5 average rating with 22 ratings. Several comments specifically called out the combat feel, which was gratifying given how much time I'd spent on it.
