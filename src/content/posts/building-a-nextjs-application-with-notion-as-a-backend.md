---
layout: "../../layouts/PostLayout.astro"
pubDate: 2023-03-11T00:00:00Z
title: Building a Next.js Application with Notion as a Backend
description: Using Notion as a backend for a Next.js application. A Step-by-Step Guide.
excerpt: Notion provides an API that allows you to access and manipulate your data programmatically. This means you can build custom applications and integrations that leverage your Notion database as a backend.
category: projects

image: "https://engage-blog-fqcuq1awv-engageintellect.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1642132652859-3ef5a1048fd1%3Fixlib%3Drb-4.0.3%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb&w=3840&q=75"
tags:
  - Next.js
  - Notion
  - API
  - Blog
  - Vercel
---

# Introduction

In recent years, Notion has become a popular productivity tool for individuals and teams. Its versatility and flexibility make it an ideal choice for organizing notes, tasks, databases, and more. But did you know that Notion can also serve as a backend for your web applications? In this article, we'll explore the benefits of using Notion as a backend for a Next.js application and demonstrate how to do it using the Notion API and TypeScript.

## Benefits of using Notion as a backend

1. No database setup required
   One of the main advantages of using Notion as a backend is that you don't have to worry about setting up and maintaining a database. Notion provides a powerful database system that allows you to organize your data in tables, and you can easily add, edit, and delete records. Plus, you can customize the properties of each column to suit your needs, such as adding select options, date pickers, and more.
2. Real-time collaboration
   Notion is designed for collaboration, so you can invite team members to work on the same page or database. This makes it easy to build applications that require real-time updates, such as chat apps, project management tools, or collaborative writing tools.
3. Rich text support
   Notion supports rich text, which means you can format your text with headings, lists, tables, images, and more. This makes it easy to create content-rich applications, such as blogs, wikis, or knowledge bases.
4. API access
   <br>
   <br>

Notion provides an API that allows you to access and manipulate your data programmatically. This means you can build custom applications and integrations that leverage your Notion database as a backend.
Building a Next.js application with Notion as a backend
Now that we've covered the benefits of using Notion as a backend, let's see how we can use it with Next.js. We'll build a simple blog application that retrieves posts from a Notion database and displays them on the frontend. We'll use TypeScript to ensure type safety and the Notion API to fetch data from Notion.

# Prerequisites

Before we get started, make sure you have the following

- A Notion account
- A Notion API key
- A Next.js project set up with TypeScript
- The notion-client package installed
  <br>
  <br>

To get your Notion API key, go to your Notion integrations page, create a new integration, and copy the API key.
To install the notion-client package, run the following command:

```bash
npm install notion-client
```

## Step 1: Create a Notion database

First, let's create a Notion database to store our blog posts. To do this, go to your Notion dashboard and create a new page. In the page properties, click the "Add a database" button, and select "Blog Posts" as the database template.

This will create a database with the following properties:

- Date
- Tags
- Title
- Content
  <br>
  <br>

Feel free to customize the properties to suit your needs.

## Step 2: Fetch data from Notion

Next, let's fetch the data from Notion using the Notion API. Create a new file called notion.ts in your Next.js project, and add the following code:

```typescript
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getBlogPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page) => ({
    id: page.id,
    title: page.properties["Title"].title[0].text.content,
    date: page.properties["Date"].date.start,
    tags: page.properties["Tags"].multi_select.map((tag) => tag.name),
    content: page.properties["Content"].rich_text[0].text.content,
  }));
}
```

In this code, we're creating a new Client object from the notion-client package, using the NOTION_API_KEY environment variable to authenticate. We're also defining a function called getBlogPosts that retrieves the blog posts from Notion.
We're using the database_id environment variable to specify the ID of the Notion database we created earlier. Then, we're using the databases.query method to retrieve the data from the database.
The databases.query method returns an array of pages, where each page represents a blog post. We're mapping over the results and extracting the relevant properties (title, date, tags, and content) from each page.

## Step 3: Create a Next.js API route

Next, let's create a Next.js API route to serve our blog posts. Create a new file called blog.ts in the pages/api directory, and add the following code:

```typescript
import { NextApiRequest, NextApiResponse } from "next";
import { getBlogPosts } from "../../lib/notion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await getBlogPosts();

  res.status(200).json(posts);
}
```

This code defines a new API route that retrieves the blog posts using the getBlogPosts function we defined earlier. We're using the NextApiRequest and NextApiResponse types from Next.js to ensure type safety.

## Step 4: Display the blog posts on the frontend

Finally, let's display the blog posts on the frontend. Create a new file called index.tsx in the pages directory, and add the following code:

```typescript
import { GetStaticProps } from "next";
import { getBlogPosts } from "../lib/notion";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

interface Post {
  id: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <ul>
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
```

In this code, we're using the GetStaticProps function from Next.js to fetch the blog posts at build time. We're defining a new interface called Post to represent a single blog post, and another interface called Props to represent the props of our Home component.
In the Home component, we're using the map method to render each blog post as a div element. We're displaying the title, date, tags, and content of each post.

## Step 5: Run the application

That's it! You can now run your application using the following command:

```bash
npm run dev
```
