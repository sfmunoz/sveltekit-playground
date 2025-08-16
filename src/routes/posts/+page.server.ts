import type { PageServerLoad } from "./$types";
import { posts } from "$lib/data/posts";

export const load = (async () => {
  return { posts };
}) satisfies PageServerLoad;
