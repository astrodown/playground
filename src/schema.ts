import { z } from "astro:content";

const ExportData = z.union([
	z.string(),
	z.number(),
	z.boolean(),
	z.object({
		name: z.string(),
		type: z.enum(["raw", "pandas", "s3"]),
		value: z.union([
			z.string(),
			z.number(),
			z.boolean(),
			z.array(z.string()),
			z.array(z.number()),
			z.array(z.boolean()),
		]),
	}),
]);

export type ExportData = z.infer<typeof ExportData>;

export const analysisSchema = z.object({
	title: z.string(),
	author: z.string(),
	exports: z.array(ExportData).optional(),
});

export const dataSchema = z.object({
	title: z.string(),
	previewURL: z.string().optional(),
	description: z.string().optional(),
});
