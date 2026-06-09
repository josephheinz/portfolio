---
n: "03"
title: Routeful
kind: Web App
initials: RT
blurb: Logistics route optimizer that trims fleet mileage by ~18% behind a friendly map UI.
tags: Python · React · Mapbox
cover: /projects/routeful/cover.jpg
video: /projects/routeful/demo.mp4
---

## Overview

Routeful is a last-mile route optimization tool for small and mid-sized delivery fleets — the kind of operation running 5 to 80 vehicles where manually planning routes in a spreadsheet costs an hour every morning and leaves obvious mileage on the table. The product presents an optimized daily route plan on a map, lets dispatchers make manual overrides, and exports directly to driver phones.

## My Role

I built the full React frontend and Mapbox integration while the backend team handled the optimization engine (a Python service wrapping OR-Tools with some custom preprocessing for time-window constraints). My work included:

- The map interface — drag-and-drop stop reordering, live re-routing preview, turn-by-turn polyline rendering at thousands of stops without frame drops
- The dispatcher dashboard — vehicle status cards, ETA tracking, deviation alerts
- The mobile-optimized driver view, which needed to work on low-end Android devices in poor network conditions

## Challenges

Performance was the central challenge. Rendering 500+ stops and their route lines on a Mapbox canvas while keeping the UI responsive for drag operations required careful layering. I moved all geometry processing off the main thread into a Web Worker and batched Mapbox source updates to avoid triggering layout recalculations on every drop event. The result scrolls and reorders smoothly at 1000 stops on a three-year-old Chromebook.

The other hard piece was the mobile driver experience. Drivers use cheap Android phones with unreliable 3G. I implemented a service worker cache with a background sync queue so drivers could mark stops complete offline — syncs would replay in order when connectivity returned, with server-side idempotency keys preventing duplicate state.

## Outcome

In a pilot with a regional grocery delivery company, Routeful reduced total fleet mileage by 18% in the first month — roughly as expected from the optimization model, but the real win was dispatcher time: manual planning went from 55 minutes to under 10. Driver on-time rate improved from 81% to 94%, largely due to accurate ETAs replacing guesswork.
