---
layout: "../../layouts/PostLayout.astro"
pubDate: 2023-01-01T00:00:00Z
title: Getting started with TailwindCSS in Next.js.
description: A guide to getting started with TailwindCSS in Next.js.
excerpt: Tailwind CSS is a popular utility-first CSS framework that allows you to rapidly build modern, responsive, and customizable user interfaces.
image: "https://www.drupal.org/files/project-images/screenshot_361.png"
category: now
tags:
  - TailwindCSS
  - Next.js
  - CSS
  - Frontend
---

# Introduction

Tailwind CSS is a popular utility-first CSS framework that allows you to rapidly build modern, responsive, and customizable user interfaces. Next.js is a popular server-side rendering framework for React applications that provides many features, including server-side rendering, static site generation, and more. Combining Next.js with Tailwind CSS can help you build fast, scalable, and responsive web applications. In this article, we'll walk you through the process of getting started with Tailwind CSS in a Next.js project.

# Step 1: Create a new Next.js project

To get started, you need to have Node.js and npm installed on your computer. Once you have them installed, open your terminal and create a new Next.js project by running the following command:

```bash
npx create-next-app my-tailwind-project
```

This will create a new Next.js project in a directory named my-tailwind-project. Once the project is created, navigate to the project directory by running the following command:

```bash
cd my-tailwind-project
```

# Step 2: Install Tailwind CSS and its dependencies

Next, you need to install Tailwind CSS and its dependencies. To do this, run the following command in your project directory:

```bash
npm install tailwindcss postcss autoprefixer
```

These packages are required to use Tailwind CSS in a Next.js project. tailwindcss is the core package, postcss is a tool for transforming CSS with JavaScript, and autoprefixer is a plugin for postcss that automatically adds vendor prefixes to your CSS.

# Step 3: Configure Tailwind CSS

Next, you need to configure Tailwind CSS by creating a tailwind.config.js file in your project directory. This file will contain your custom configuration for Tailwind CSS. You can generate a default configuration file by running the following command:

```bash
npx tailwindcss init
```

This will create a default configuration file in your project directory. You can modify this file to customize your Tailwind CSS configuration.

Next, create a postcss.config.js file in your project directory with the following code:

```js
module.exports = {
  plugins: ["tailwindcss", "autoprefixer"],
};
```

This file tells postcss to use Tailwind CSS and autoprefixer.

# Step 4: Import Tailwind CSS

To import Tailwind CSS into your Next.js project, create a new file named styles/globals.css with the following code:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This file imports the base styles, component styles, and utility styles from Tailwind CSS.

Next, import the global styles into your Next.js project by modifying your \_app.js file located in pages/\_app.js. Add the following code to your \_app.js file:

```jsx
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

This imports the global styles into your Next.js project.

# Step 5: Test Tailwind CSS

Now that you have configured Tailwind CSS in your Next.js project, it's time to test it out. Open your terminal and start your Next.js development server by running the following command:

```bash
npm run dev
```

This will start your Next.js server on http://localhost:3000. Open your web browser and navigate to http://localhost:3000. You should see the default Next.js welcome page. To test Tailwind CSS, add the following code to your pages/index.js file:

```jsx
import React from "react";

function HomePage() {
  return (
    <div className="bg-blue-500 p-10">
      <h1 className="text-3xl font-bold text-white">
        Welcome to my Tailwind CSS and Next.js app
      </h1>
    </div>
  );
}

export default HomePage;
```

This code will display a blue background with white text on the homepage.

Save the changes and refresh your browser. You should see the new homepage with the blue background and white text. Congratulations, you have successfully integrated Tailwind CSS into your Next.js project.

# Conclusion

In this article, we walked you through the process of getting started with Tailwind CSS in a Next.js project. We covered the steps of creating a new Next.js project, installing Tailwind CSS and its dependencies, configuring Tailwind CSS, importing Tailwind CSS, and testing it out. Tailwind CSS is a powerful tool that can help you build modern and responsive user interfaces quickly and easily. When combined with Next.js, you can create fast and scalable web applications that look great on all devices.
