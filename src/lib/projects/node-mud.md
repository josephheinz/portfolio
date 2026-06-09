---
n: "03"
title: Node MUD
kind: Game
initials: NM
blurb: A browser-based multi-user dungeon with real-time multiplayer, room exploration, and a command parser that feels at home in a terminal.
tags: Svelte · Node.js · WebSockets
---

## Overview

Node MUD is a real-time text-based multiplayer game running in the browser. Players explore rooms, interact with objects, fight enemies, and communicate with others through a classic command-driven interface — all without leaving a browser tab.

The project has a fork and open issues, meaning it's seen interest beyond its original scope.

## My Role

I designed and built the full stack: a Node.js server managing world state and WebSocket connections, and a Svelte frontend that renders the terminal-style game interface. Room navigation, player sessions, and the command parsing pipeline are all custom.

## Challenges

The hardest part was keeping world state consistent across concurrent players. When two players act on the same room or entity in the same tick, the server needs a deterministic resolution order. I built a simple turn-queue system that serializes conflicting actions within a tick window while still feeling responsive.

The command parser needed to handle ambiguous input gracefully — "attack" with no target, unrecognized verbs, partial matches for room exits. I went with a tokenizer + intent resolver pattern that returns helpful error messages rather than silent failures.

## Outcome

A playable multiplayer MUD that demonstrates real-time server architecture and state synchronization patterns. The fork suggests at least one other developer found it worth building on.
