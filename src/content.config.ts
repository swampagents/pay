import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const features = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/features' }),
  schema: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const devices = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/devices' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    description: z.string(),
    specs: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ),
    order: z.number(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

export const collections = { features, devices, faq };
