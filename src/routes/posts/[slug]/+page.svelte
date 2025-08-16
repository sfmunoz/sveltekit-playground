<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
</script>

<h1>{data.title} (slug = "{data.slug}")</h1>
<p>{data.content}</p>
