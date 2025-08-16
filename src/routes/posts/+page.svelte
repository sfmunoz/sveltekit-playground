<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
</script>

<h1>Posts</h1>

<ul>
  {#each data.posts as post (post.slug)}
    <li>
      <a href={resolve(`/posts/${post.slug}`)}
        >{post.meta.title} - {post.meta.date.toISOString()}</a
      >
    </li>
  {/each}
</ul>
