---
n: "06"
title: Synthwave Runner
kind: Game · side project
initials: SR
blurb: Mobile endless runner shipped to 120k+ installs — gameplay, shaders, and live-ops.
tags: Unity · C# · Shaders
cover: /projects/synthwave-runner/cover.jpg
video: /projects/synthwave-runner/demo.mp4
---

## Overview

Synthwave Runner is an endless runner for iOS and Android set in a neon 80s aesthetic. The player dodges obstacles on a procedurally scrolling track while a reactive soundtrack syncs to gameplay events. It launched two years ago and has accumulated 120k+ installs across both platforms.

I built the game solo over about a year, handling design, code, shaders, and some of the audio. A freelance composer provided the base music tracks; I wrote the adaptive layer system that mixes them at runtime.

## Technical Highlights

**Custom bloom shader**: The neon glow effect is done with a multi-pass Gaussian blur applied selectively to emissive surfaces only. The bloom pass runs at half resolution and upsamples before compositing — keeps GPU cost low enough to maintain 60fps on iPhone 11 and its Android equivalents.

**Procedural track generation**: Tracks scroll at increasing speed while obstacles and power-ups spawn according to a difficulty curve that ramps over the first three minutes and then oscillates to avoid player exhaustion. The generator keeps a sliding window of upcoming chunks so players never feel an observable frame hitch when new content loads.

**Adaptive soundtrack**: The music engine maintains four stems per track (bass, drums, melodic, synth lead). As the player multiplier climbs, stems layer in one at a time. On death, everything cuts except the bass, with a short reverb tail. AudioMixer snapshot transitions handle the crossfades cleanly without any custom DSP work.

**Live ops**: I built a simple live-ops system using Firebase Remote Config that lets me push daily challenges and limited-time cosmetic unlocks without an app update. The client polls on launch, caches the config locally, and falls back gracefully when offline.

## Challenges

The hardest part was frame rate consistency on low-end Android. Profiling revealed the culprit was garbage collection pressure from per-frame obstacle spawn logic that allocated temporary List objects. I rewrote the hot path using a fixed object pool and pre-allocated collections, dropping average GC allocs per frame from ~2KB to near zero. Frame time variance dropped significantly.

Battery consumption was a secondary concern — an always-on 60fps game drains phones fast. I added a background throttle (30fps, pause non-essential particles) that kicks in when the device's battery saver mode is active or the app is backgrounded, reducing drain by about 30% in normal play sessions.

## Outcome

120k+ installs organically (no paid UA). 4.2 stars on the App Store (4.0 on Google Play). The game broke even on development time within four months of launch via IAP and rewarded-ad placements. Still receives sporadic updates; retained roughly 8% of day-30 players, which is above average for the genre.
