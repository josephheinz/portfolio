---
n: "06"
title: SparxECS
kind: Library
initials: SE
blurb: A lightweight entity component system for .NET — plug it into any project and get a clean architecture for game objects without the ceremony.
tags: C# · .NET · NuGet
---

## Overview

SparxECS is a minimal entity component system (ECS) library for .NET, published on NuGet. It provides the core ECS primitives — entities, components, and systems — with an API designed to be easy to drop into any project without forcing a specific architecture around it.

> "A lightweight plug and play entity component system"

Published at [nuget.org/packages/SparxECS](https://www.nuget.org/packages/SparxECS).

## My Role

Designed and built the library solo. That included the entity ID management, the component storage strategy, the system execution pipeline, and the NuGet packaging and publishing workflow.

## Challenges

The main design tension in ECS libraries is between flexibility and performance. A fully generic, archetype-based ECS is fast but complex to implement correctly. I targeted the simpler sparse-set model — good enough performance for indie-scale projects, dramatically easier to understand and extend.

The API surface needed to feel natural in C# idiomatic style. I leaned into generics and extension methods to keep the call sites clean while keeping the core implementation straightforward.

## Outcome

A published NuGet package that makes ECS architecture accessible without the overhead of a full game engine dependency. Useful for anyone building a game or simulation in .NET who wants clean entity management without rolling their own.
