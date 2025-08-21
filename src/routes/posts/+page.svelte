<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";
  import Listgroup from "flowbite-svelte/Listgroup.svelte";

  let { data }: PageProps = $props();
  let links = data.posts.map((p) => ({
    name: `${p.meta.title} - ${p.meta.date.toISOString()}`,
    href: resolve(`/posts/${p.slug}`),
  }));
</script>

<h1 class="text-dark dark:text-light font-bold text-3xl text-center my-4">
  Posts
</h1>
<Listgroup active items={links} class="mx-auto w-96" />
