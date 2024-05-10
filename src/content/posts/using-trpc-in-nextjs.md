---
layout: "../../layouts/PostLayout.astro"
pubDate: 2023-01-06T00:00:00Z
title: Using trpc in Next.js
description: A Beginner's Guide to Building TypeScript-based RPC Services
excerpt: Trpc is a framework for building TypeScript-based RPC (Remote Procedure Call) services.
image: "https://media.sitepen.com/blog-images/2022/12/Intro-to-tRPC-1024x538.jpg"
category: now
tags:
  - Next.js
  - tRPC
  - API
  - TypeScript
---

# Introduction

Trpc is a framework for building TypeScript-based RPC (Remote Procedure Call) services. It offers a simple and easy-to-use API for defining server endpoints and client queries. In this article, we will walk through the steps for using trpc in a Next.js project.

# Step 1: Set Up a Next.js Project

The first step is to set up a new Next.js project. You can do this by running the following command:

```bash
npx create-next-app my-trpc-project
```

This will create a new Next.js project with all the necessary files and dependencies.

# Step 2: Install trpc

The next step is to install trpc. You can do this by running the following command in your project directory:

```bash
npm install trpc
```

This will install trpc and its dependencies.

# Step 3: Define trpc Endpoints

Now that trpc is installed, we can define our server endpoints. To do this, we need to create a new file called api/trpc.ts. This file will contain all of our trpc endpoint definitions.

```typescript
import { createTRPCRouter } from "@trpc/server";
import { httpLink } from "@trpc/client/links/httpLink";
import { z } from "zod";

const appRouter = createTRPCRouter({
  router: {
    hello: {
      input: z.object({
        name: z.string(),
      }),
      async resolve({ input }) {
        return `Hello, ${input.name}!`;
      },
    },
  },
});

export default appRouter;
```

In this example, we define a single endpoint called hello that takes an input object with a name property and returns a string.

# Step 4: Set Up trpc Server

Next, we need to set up the trpc server. We can do this by creating a new file called pages/api/trpc/[trpc].ts.

```typescript
import { handleTRPCRequest } from "@trpc/server/adapters/next";
import appRouter from "../../../api/trpc";

export default handleTRPCRequest(appRouter);
```

This file defines a Next.js API route that handles incoming trpc requests and passes them to our appRouter object.

# Step 5: Set Up trpc Client

Finally, we need to set up the trpc client. We can do this in our Next.js pages by importing the httpLink function from @trpc/client/links/httpLink and creating a new trpc client.

```typescript
import { httpLink } from "@trpc/client/links/httpLink";
import { createTRPCClient } from "@trpc/client";

const trpcClient = createTRPCClient({
  links: [httpLink({ url: "/api/trpc" })],
});
```

This creates a new trpc client that sends requests to our server at the /api/trpc endpoint.

# Step 6: Use trpc Client in Components

Now that our trpc client is set up, we can use it in our components to make server requests.

```typescript
import { useQuery } from "react-trpc";
import trpcClient from "../utils/trpcClient";

function HelloMessage({ name }: { name: string }) {
  const { data } = useQuery(["hello", { name }], {
    client: trpcClient,
  });

  return <div>{data}</div>;
}
```

In this example, we define a new component that takes a name prop and uses the useQuery hook from the react-trpc package to make a request to our server using the trpc client we created earlier. The useQuery hook takes an array with the endpoint name and any required input parameters.

# Step 7: Run the Next.js Server

We're now ready to test our trpc implementation in a Next.js project. Start the Next.js server by running the following command in your project directory:

```bash
npm run dev
```

This will start the server at http://localhost:3000, and we can test our trpc endpoint by accessing it in our browser at http://localhost:3000/api/trpc/hello?name=John.

# Conclusion

In this article, we walked through the steps for using trpc in a Next.js project. With trpc, we can easily define and use RPC endpoints on both the server and client sides using TypeScript, making it a powerful tool for building web applications. By following the steps outlined here, you can quickly set up a trpc server and client in your Next.js project and start using trpc in your components.
