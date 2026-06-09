---
n: "04"
title: Quick Build
kind: CLI Tool
initials: QB
blurb: A project scaffolding tool that gets you past the boring setup and into writing real code — preconfigured, opinionated, and fast.
tags: JavaScript · Node.js · CLI
---

## Overview

Quick Build is a CLI scaffolding tool that handles the repetitive project setup work — folder structure, config files, boilerplate — so you can start writing actual application code immediately.

> "Build your projects faster without worrying about the boring stuff"

The goal was to encode the setup decisions I kept making over and over into a repeatable, zero-thought starting point.

## My Role

Designed and built the CLI from scratch. That included the interactive prompt flow for project configuration, the template system, and the file generation pipeline.

## Challenges

The interesting design problem is how opinionated to be. A tool that's too rigid forces workarounds; one that's too flexible becomes just another config file. I landed on a small set of well-chosen presets for the most common project shapes, with a simple escape hatch for anything non-standard.

The template rendering needed to handle both file content substitution and directory layout, which required a two-pass approach: first resolve the project metadata, then materialize the file tree.

## Outcome

A practical internal tool that eliminated a consistent source of wasted time at the start of new projects. Clean enough that it's worth open sourcing as a reference for CLI tool design in Node.js.
