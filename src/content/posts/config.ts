import { defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const now = defineCollection({
  schema: rssSchema,
});

export const collections = { now };