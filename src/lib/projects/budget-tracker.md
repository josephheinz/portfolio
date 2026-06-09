---
n: "02"
title: Budget Tracker
kind: Web App
initials: BT
blurb: A personal finance tracker with categorized spending, monthly summaries, and a clean UI that makes reviewing expenses feel less painful.
tags: Svelte · SvelteKit · Vercel
---

## Overview

Budget Tracker is a lightweight personal finance app for logging and reviewing spending. It handles categorized transactions, monthly rollups, and a running balance — covering the practical 80% of what most people actually need without the bloat of a full-featured finance platform.

The live app is deployed on Vercel at [budgetr-rho.vercel.app](https://budgetr-rho.vercel.app).

## My Role

Built entirely solo as a self-contained SvelteKit app. I designed the data model, the UI, and the client-side state management. The app runs fully in the browser with local persistence — no account required, no data leaves the device.

## Challenges

The main design challenge was making data entry fast enough that people would actually use it. I optimized the transaction input flow for keyboard-first use — tab between fields, hit enter to save, stay in the entry context. Reducing friction at the point of logging is what makes a budget tracker useful in practice.

Svelte's reactive stores made the running balance and category summaries easy to keep in sync without a Redux-style architecture overhead.

## Outcome

A usable personal finance tool that's fast, private by default, and straightforward to deploy. Good exercise in Svelte's reactivity model and designing for habitual daily use.
