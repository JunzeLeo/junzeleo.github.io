import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // 用 coerce 更稳：md 里写 2025-01-01 也能解析
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

const urlOrPathOrEmpty = z.union([
  z.string().url(),
  z.string().regex(/^\/.*/, "Must start with / for local files"),
  z.literal(""),
]);

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    type: z.enum(['conference', 'journal', 'workshop', 'poster', 'demo', 'thesis', 'preprint']),
    tags: z.array(z.string()).default([]),
    authors: z.array(z.string()),

    // 图片：放在 public/ 里，用 /pubs/xxx.jpg 引用
    thumbnail: z.string().optional().default(''),

    pinned: z.boolean().optional().default(false),

    links: z
      .object({
        pdf: urlOrPathOrEmpty.optional(),
        doi: urlOrPathOrEmpty.optional(),
        arxiv: urlOrPathOrEmpty.optional(),
        project: urlOrPathOrEmpty.optional(),
        video: urlOrPathOrEmpty.optional(),
      })
      .optional()
      .default({}),

    award: z.string().optional().default(''),
    selected: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog,
  news,
  publications,
};
