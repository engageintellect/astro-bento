---
layout: "../../layouts/PostLayout.astro"
pubDate: 2022-12-30T00:00:00Z
title: Using Pocketbase with SvelteKit
description: A guide to getting started with Pocketbase and SvelteKit.
excerpt: Pocketbase is a cloud database service that provides a fast and scalable way to store and manage your application data. SvelteKit is a web application framework that makes it easy to build fast and efficient web applications.
image: "https://miro.medium.com/max/850/1*liFDPu7pGD1ZtdUkouco0A.png"
category: now
tags:
  - SvelteKit
  - Pocketbase
  - Database
  - Nginx
---

# Introduction

Pocketbase is a cloud database service that provides a fast and scalable way to store and manage your application data. SvelteKit is a web application framework that makes it easy to build fast and efficient web applications. In this blog post, we will explore how to use Pocketbase with SvelteKit.

# Create a Pocketbase account

The first step is to create a Pocketbase account. Go to the Pocketbase website and sign up for a free account. Once you have signed up, you will be taken to the Pocketbase dashboard.

# Create a Pocketbase database

In the Pocketbase dashboard, create a new database by clicking on the "Create Database" button. Give your database a name and choose the region where you want it to be hosted. You can also select the database size and plan that best fits your needs. Once your database is created, you will be given a database URL and API key.

# Install the Pocketbase client

To interact with your Pocketbase database, you will need to install the Pocketbase client. Open a terminal window and navigate to your SvelteKit project directory. Install the Pocketbase client by running the following command:

```bash
npm install pocketbase
```

# Set up a Pocketbase connection

Next, you need to set up a connection to your Pocketbase database. In your SvelteKit project, create a new file called pocketbase.js in the src directory. Add the following code to this file:

```javascript
import { createClient } from "pocketbase";

const client = createClient({
  url: "YOUR_DATABASE_URL",
  apiKey: "YOUR_API_KEY",
});

export default client;
```

Replace YOUR_DATABASE_URL and YOUR_API_KEY with the values from your Pocketbase dashboard.

# Use Pocketbase in your SvelteKit app

Now that you have set up a connection to your Pocketbase database, you can use it in your SvelteKit app. In your SvelteKit pages or components, import the pocketbase.js file and use the Pocketbase client to interact with your database.

For example, to fetch data from a Pocketbase collection and display it in a Svelte component, you can do the following:

```javascript

<script>
  import client from "../pocketbase.js";
  import { onMount } from "svelte";

  let items = [];

  onMount(async () => {
    const collection = client.collection("items");
    const data = await collection.find();
    items = data.items;
  });
</script>

<ul>
  {#each items as item}
    <li>{item.name}</li>
  {/each}
</ul>
```

In this example, we import the Pocketbase client from the pocketbase.js file and use the onMount lifecycle function to fetch data from a items collection in the Pocketbase database. We then display the data in a list in the Svelte component.

# Conclusion

In this blog post, we have explored how to use Pocketbase with SvelteKit. By following these steps, you can easily set up a connection to your Pocketbase database and use it in your SvelteKit app. Pocketbase provides a fast and scalable way to store and manage your application data, while SvelteKit makes it easy to build fast and efficient web applications.
