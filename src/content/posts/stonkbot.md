---
layout: "../../layouts/PostLayout.astro"
pubDate: 2024-4-1T12:00:00Z
title: StonkBot.
description: An AI-powered financial data and sentiment engine. Built using SvelteKit, Vercel's AI SDK, OpenAI, TailwindCSS, and DaisyUI.
excerpt: hello world
category: projects
image: /images/stonkbot-ui.png
tags:
  - Sveltekit
  - TypeScript
  - TailwindCSS
  - Python
  - OpenAI
  - ChatGPT
  - FastAPI
  - AI
  - Finance
  - Linux
  - Ubuntu
  - Nginx
  - Vercel
projectURL: "https://stonkai-chat.vercel.app"
repoURL: "https://github.com/engageintellect/svelte-ai-injection.git"
---

# Introduction

Sveltekit chatGPT integration with dynamic 3rd party API-fed context injection. Made using Vercel's AI SDK, OpenAI, TailwindCSS, and DaisyUI.

## Detailed views of stock prices, company data, news, videos, and more.

<img class="rounded" src="/images/svelte-ai-injection-chart1.png"/>
<br/>

## Context-aware AI insights and sentiment analysis

<img class="rounded" src="/images/svelte-ai-injection-chart2.png"/>
<br/>

## Getting Started (for developers)

Everything you need to build a Svelte project with Vercel's AI SDK, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
git clone https://github.com/engageintellect/svelte-ai-injection.git

```

### OpenAI API Key

```bash
/.env.local

# OpenAI API Key
OPENAI_API_KEY=sk-<your-api-key>

# Yahoo Finance API Key (I use an endpoint on my own server to avoid CORS issues)
YFINANCE_ENDPIONT=https://apidojo-yahoo-finance-v1.p.rapidapi.com
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```
