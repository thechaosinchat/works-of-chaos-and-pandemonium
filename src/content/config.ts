import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    created: z.coerce.date(),
    edited: z.coerce.date(),
  }),
});

const cutWorks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cut-works' }),
  schema: z.object({
    title: z.string(),
    created: z.coerce.date(),
    edited: z.coerce.date(),
    cut: z.coerce.date(),
    cutReason: z.string(),
  }),
});

export const collections = { works, cutWorks };
