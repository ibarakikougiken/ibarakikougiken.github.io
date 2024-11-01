import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date(),
  }),
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date(),
    isDraft: z.boolean(),
  }),
});

export const collections = { news, articles };
