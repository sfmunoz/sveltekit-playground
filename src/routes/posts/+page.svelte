<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
</script>

<h1>Posts</h1>

<ul>
  {#each data.posts as post (post.slug)}
    <li><a href={`/posts/${post.slug}`}>{post.title}</a></li>
  {/each}
</ul>
