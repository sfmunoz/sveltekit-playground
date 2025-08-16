<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
</script>

<table>
  <tbody>
    <tr><td>title</td><td>{data.meta.title}</td></tr>
    <tr><td>date</td><td>{data.meta.date.toISOString()}</td></tr>
    <tr
      ><td>url</td><td
        ><a href={resolve(`/posts/${data.slug}`)}>/posts/{data.slug}</a></td
      ></tr
    >
  </tbody>
</table>

<p>{@html data.html}</p>
