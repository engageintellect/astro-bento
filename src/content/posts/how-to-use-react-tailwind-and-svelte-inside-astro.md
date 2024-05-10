---
layout: "../../layouts/PostLayout.astro"
pubDate: 2023-03-18T00:00:00Z
title: How to use React, Tailwind, and Svelte Inside Astro
description: How to use React and Svelte components inside Astro with TailwindCSS.
excerpt: How to use React and Svelte components inside Astro with TailwindCSS.
category: now
image: "https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fcss-tricks.com%252Fwp-content%252Fuploads%252F2021%252F05%252Fastro-homepage.png%3Ftable%3Dblock%26id%3D63300481-8309-489c-bdbc-169195374161%26cache%3Dv2&w=3840&q=75"
tags:
  - Astro
  - React
  - Svelte
  - TailwindCSS
---

# Introduction

I’ll have to admit, Astro has been growing on me lately, big time. I don’t know whether it’s the sheer speed, the familiar template layout, or the ever-growing feature set. However, what I do know, is that Astro is capable of doing most of the things I want to do, well.

# Overview

In this article, we will be going over how to do the following:

- Initialize a new Astro project & Git repository.
- Add TailwindCSS to our project.
- Render Svelte components on our homepage.
- Render React components on our homepage.
- Deploy our project to Vercel.

# Getting Started

To get started, we will first create a directory for our project to live in. I’m going to call mine ‘astro-demo’.

```bash
mkdir astro-demo && cd astro-demo
```

Now, we’ll start a new Astro project.

```bash
pnpm create astro@latest .
```

When prompted, we will opt to include sample files for this demo:

![Untitled](https://miro.medium.com/v2/resize:fit:1400/0*EdC1Ocx_mshkElut)

And to install dependencies:

![Untitled](https://miro.medium.com/v2/resize:fit:1400/0*3XOrd9i6Hq9nUawb)

We’re also going to opt for TypeScript, because I like things that make sense:

![Untitled](https://miro.medium.com/v2/resize:fit:1400/0*XgV0A4SCXT9iefRo)

And we’ll stick with the default Strictness for TypeScript, cause we’re not trying to prove anything:

![Untitled](https://miro.medium.com/v2/resize:fit:1400/0*zLQB1JUau8vugS5w)

Lastly, we will have the installer initialize a new Git repository for our project:

![Untitled](https://miro.medium.com/v2/resize:fit:1400/0*fdtGtRLqDa5BwhYI)

# Starting our Project

Now that our new project is set up, and everything is initialized, we’re ready to get going. I’m going to open this project up in VS Code, and start the dev server:

```bash
code . && pnpm run dev
```

We’ll navigate to `http://localhost:3000` in our browser to make sure that our server is up:

![Untitled](https://miro.medium.com/v2/resize:fit:1400/0*Q0p0plNS_P0odjct)

## Adding TailwindCSS, React, and Svelte to our Project

To add Tailwind, React, and Svelte to our project, all we have to do is open a terminal and run the following command:

```bash
pnpm astro add tailwind react svelte
```

We can verify that everything installed correctly be checking to see if our new packages were added to our `astro.config.mjs` file.

![Untitled](https://miro.medium.com/v2/resize:fit:1400/0*riuGkBsOD0Ag7veJ)

## Create Svelte Component

Let’s create a basic svelte component. We’ll add the following file called `Svelte.svelte` to our project’s `/src/components` directory:

```tsx
<script lang="ts">
  let name: string;
</script>

<div class="my-5 bg-blue-200 rounded-lg p-5">
  <h1>Hello from {name || "Svelte"}!</h1>
  <input placeholder="enter name" bind:value={name} />
</div>
```

Now, we can import our new Svelte component in our `/src/pages/index.astro` page by adding:

```tsx
import Svelte from "../components/Svelte.svelte";
```

Finally, we will drop our component in wherever we like by using the following:

```tsx
<Hello client:load />
```

The result should look something like this:

![Untitled](https://miro.medium.com/v2/resize:fit:1400/0*Ctm4cs7vzxHLrUtY)

## Create React Component

Now that we have created and rendered our Svelte component, with Tailwind. We can repeat the same process for our React component. In this case, we’ll make a a new file in `/src/components` called `React.tsx` with the following code:

```tsx
import { useState } from "react";

export default function React() {
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  return (
    <div className="bg-purple-200 shadow-md p-5 rounded-lg my-5">
      <h1>Hello from {name || "React"}.</h1>
      <input
        placeholder="enter name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}
```

We will import our React component and call it the same way we did with out Svelte component.

```tsx
import React from "../components/React";
```

Finally, we will drop our component in wherever we like by using the following:

```tsx
<React client:load />
```

Your output should look something like this:

![Untitled](https://miro.medium.com/v2/resize:fit:1400/0*n2Rk687QkcQdZFKp)

## Deploying our app to Vercel

I won’t be going in depth on how to use Vercel in this article, so I will be assuming that you have used it before, and just be giving you what you need from an Astro perspective.

To deploy our app to Vercel, and ensure that any future API routes or component you add to your project work as expected, you will want to add the Vercel package to your project:

```tsx
pnpm astro add vercel
```

From there, you can simply run the `vercel` command in your cli, or go to the Vercel website to deploy your project through the GUI.

# Conclusion

In this article we went over:

- Setting up a new Astro project
- Adding TailwindCSS to our project, scoped globally.
- Adding React components, with useState hooks.
- Adding Svelte components, with state.
- Deploying to Vercel.
