---
layout: "../../layouts/PostLayout.astro"
pubDate: 2023-09-18T00:00:00Z
title: Fullstack Web Store
description: A fullstack web store using HTMX, Python, Django, Stripe, SQLite, Ubuntu, and Apache.
excerpt: Create web stores without JS
category: projects
image: "/images/gme-site.png"
tags:
  - Django
  - Python
  - Stripe
  - HTMX
  - TailwindCSS
  - Pocketbase
  - SQLite
  - Nginx
  - Linux
  - Ubuntu

projectURL: "https://shopgme.com"
repoURL: "https://github.com/engageintellect/greymatter-store"
---

# Introduction

As an aspiring entrepreneur, I've always dreamed of launching my own online store. However, the prospect of building a full-stack web store from scratch seemed intimidating at first. But then, I discovered a fantastic combination of technologies that made this dream not only attainable but also enjoyable. In this blog post, I'll share my journey of creating a full-stack web store using htmx, Django, SQLite, Tailwind CSS, and Stripe while emphasizing the benefits of using htmx and Django in place of heavy JavaScript.

## **1. Starting with Django**

My journey began with Django, a Python web framework known for its simplicity and efficiency. Setting up my project was a breeze:

```bash
pip install Django
django-admin startproject webstore
```

## **2. Designing with Tailwind CSS**

For the frontend, I opted for Tailwind CSS. Its utility-first approach made styling my web store a breeze. With Tailwind CSS, I could focus on designing my store's user interface without getting bogged down in the intricacies of CSS. My base.html template served as the foundation, and Tailwind CSS classes made styling a snap.

## **3. Harnessing SQLite for the Database**

Django's built-in support for SQLite proved invaluable for managing my store's data. SQLite is lightweight and perfect for small to medium-sized web applications. Configuring the database was straightforward:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Running initial migrations set up my database schema:

```bash
python manage.py migrate
```

## **4. Creating Models and Views**

Django's powerful ORM allowed me to define my product and order models with ease. The admin interface made managing products a breeze. To display my products and manage the shopping cart, I created views using Django's class-based views, ensuring code reusability and efficiency.

## **5. Embracing htmx for Interactivity**

Here's where things got exciting. Instead of relying heavily on JavaScript for dynamic behavior, I turned to htmx. htmx lets you build interactive web applications with minimal JavaScript. I added htmx attributes to my HTML elements, specifying actions like fetching data or submitting forms asynchronously. This approach not only reduced my reliance on JavaScript but also simplified the codebase and improved performance.

## **6. Streamlining Payment Processing with Stripe**

To accept payments securely, I integrated Stripe, a popular payment processing platform. I created a Stripe account and obtained API keys, then installed the `stripe` Python package. Setting up a view and template for handling payments was straightforward. Stripe's JavaScript library helped me collect payment details securely, and I felt confident knowing that Stripe's robust security measures were in place.

## **7. Prioritizing Security**

Security was paramount for my web store. I leveraged Django's built-in security features, including CSRF protection, user authentication, and permissions. Regularly updating my dependencies ensured that I addressed any security vulnerabilities promptly.

## **8. Taking It Live**

Once my web store was ready, I deployed it to a production server. Hosting platforms like Heroku, AWS, or DigitalOcean offered scalable and reliable solutions. Enabling HTTPS ensured that data transmitted between my customers and my server remained encrypted and secure.

## **9. Testing and Optimization**

Before opening my digital doors, I rigorously tested my web store to identify and resolve any issues. Optimizing performance through measures like minimizing database queries, using caching, and optimizing images and assets was crucial to delivering a seamless shopping experience.

## **Conclusion**

Building my dream web store with htmx, Django, SQLite, Tailwind CSS, and Stripe was an empowering journey. By leveraging htmx and Django in place of extensive JavaScript, I streamlined development, simplified maintenance, and achieved remarkable performance. I encourage aspiring web store owners to consider this technology stack for a smoother, more enjoyable, and successful e-commerce venture. With persistence and creativity, you can create a secure, interactive, and visually appealing online store that will delight your customers. Happy selling!
