import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { marked } from "marked";
import { getPosts } from "$lib/getPosts";

export const load = (async ({ params }) => {
  const post = getPosts().find((post) => post.slug === params.slug);
  if (!post) throw error(404);
  return {
    ...post,
    html: marked(post.body),
  };
}) satisfies PageServerLoad;
