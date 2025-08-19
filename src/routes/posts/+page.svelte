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

<div class="prose mx-auto">
  <h2>Posts</h2>
  <Listgroup active items={links} class="w-96" />
</div>
