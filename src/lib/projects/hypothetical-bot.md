---
n: "05"
title: Hypothetical Bot
kind: Slack Bot
initials: HB
blurb: A Slack bot that posts a daily hypothetical question to a channel and collects team responses — simple premise, surprisingly good for culture.
tags: TypeScript · Slack API · Node.js
---

## Overview

Hypothetical Bot sends a daily hypothetical question to a configured Slack channel on a schedule, then collects and threads responses. It's a lightweight engagement tool for remote teams — a low-stakes way to get people talking across time zones.

The project has been forked, indicating other teams have adapted it for their own workspaces.

## My Role

Built the bot solo in TypeScript. That included the Slack app setup and event subscription handling, the question queue management, and the scheduling logic.

## Challenges

Slack's event API requires fast acknowledgment — the bot has 3 seconds to respond before Slack retries, which means any slow processing has to be deferred. I structured the handlers to ack immediately and do the work asynchronously.

Managing the question queue required some thought. I wanted it to be shuffleable, editable via Slack commands, and persistent across restarts without requiring a database. A JSON file backed by atomic writes was the right call for a project at this scale.

## Outcome

A bot that's been forked and is apparently running in workspaces beyond the original one. Solid exercise in building a well-behaved Slack integration with TypeScript.
