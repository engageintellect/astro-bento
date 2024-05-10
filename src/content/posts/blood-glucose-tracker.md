---
layout: "../../layouts/PostLayout.astro"
pubDate: 2023-10-09T00:00:00Z
title: Blood Glucose Tracker.
description: A glucose monitor tracker built with Sveltekit, TailwindCSS, and DaisyUI.
excerpt: hello world
category: projects
image: /images/engage-glucose3.png
tags:
  - Sveltekit
  - TypeScript
  - TailwindCSS
  - LibreView
  - API
  - Vercel
projectURL: "https://engage-glucose.vercel.app"
repoURL: "https://github.com/engageintellect/engage-glucose"
---

# Introduction

This app is a glucose monitor tracker built with Sveltekit, TailwindCSS, and DaisyUI. It uses the LibreView API to fetch data from your glucose monitor and display it on the frontend. This app is a work in progress and is not yet ready for production use.

## Features

- [x] Fetch live glucose and user data from LibreView Glucose Monitor
- [x] Display glucose data current glucose valu
- [x] Determine is glucose is in range
- [x] Show alarm ranges for high and low glucose
- [x] Show recent high and low events
- [x] Refresh data every 30 seconds
- [x] Contact button
- [ ] Notes
- [ ] Meals
      <br/>
      <br/>

<img class="rounded" src="/images/engage-glucose.png"/>
<br/>

## Getting Started

```bash
git clone https://github.com/engageintellect/engage-glucose.git
```

## Create .env file

You will need some environment variables from LibreView to run this app.

```bash
cd engage-glucose && touch .env
```

File should look something like this:

```
USR_EMAIL=<your email>
USER_PASSWORD=<your password>
```

### Run code

```bash
cd engage-glucose && pnpm i && pnpm run dev
```
