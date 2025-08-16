import type { PageServerLoad } from "./$types";
import { getPosts } from "$lib/getPosts";

export const load = (async () => {
  return { posts: getPosts() };
}) satisfies PageServerLoad;
