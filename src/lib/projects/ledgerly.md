---
n: "01"
title: Ledgerly
kind: Web App
initials: LG
blurb: Real-time fintech dashboard for small studios — invoicing, forecasting, and fast reconciliation.
tags: React · Node · Postgres
cover: /projects/ledgerly/cover.jpg
video: /projects/ledgerly/demo.mp4
---

## Overview

Ledgerly is a financial operations platform built for small creative studios — design shops, game teams, and independent agencies that outgrow spreadsheets but don't need enterprise ERP. It surfaces cash flow, outstanding invoices, and budget burn in a single dashboard updated in real time.

The goal was to eliminate the thirty-minute monthly reconciliation ritual that every founder I talked to described with visible dread. We shipped an MVP in eight weeks and iterated to a stable v1 over the next quarter.

## My Role

I led frontend architecture and owned the invoicing module end-to-end. That meant designing the data model with the backend team, building the React component library from scratch, and writing the WebSocket subscription layer that kept dashboard numbers live.

I also drove the performance work that got initial load under 1.2 s on a median connection — code-split routes, a service worker cache for chart data, and lazy hydration on sections the user hadn't scrolled to yet.

## Challenges

The hardest problem was reconciliation accuracy. Bank feeds arrive with inconsistent memo formats, and studios frequently split a single transaction across multiple budget lines. I built a fuzzy-match engine (Postgres `tsvector` + a small scorer on the Node side) that correctly auto-matched 94% of transactions in user testing — up from around 60% with a naive string compare.

A secondary challenge was the real-time layer. Early load tests showed the naïve approach — a WebSocket per open dashboard tab — would exhaust Postgres connections under modest concurrency. I replaced it with a fanout service that holds one upstream subscription per unique query and broadcasts to all interested clients, keeping connection counts flat.

## Outcome

Ledgerly shipped to a private beta of 40 studios. After 90 days, median monthly close time dropped from 2.4 hours to 22 minutes, and the NPS from beta users sat at 68. The invoicing module alone recovered an average of $1,200 in previously untracked billable hours per studio per month.
