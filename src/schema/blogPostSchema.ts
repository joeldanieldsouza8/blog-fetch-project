// blogPostSchema.ts
import { z } from "zod";

export const blogPostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

// Export the derived TypeScript type from the Zod schema
export type BlogPost = z.infer<typeof blogPostSchema>;

export const blogPostsSchema = z.array(blogPostSchema);
