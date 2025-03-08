import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

const docsCollection = defineCollection({
  schema: baseSchema,
});

const externalDocsCollection = defineCollection({
  schema: baseSchema.extend({
    sourceRepo: z.string(),
    importedAt: z.coerce.date(),
  }),
});

export const collections = {
  docs: docsCollection,
  'external-docs': externalDocsCollection,
};