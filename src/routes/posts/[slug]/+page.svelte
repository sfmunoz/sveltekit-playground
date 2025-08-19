<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";
  import Table from "flowbite-svelte/Table.svelte";
  import TableBody from "flowbite-svelte/TableBody.svelte";
  import TableBodyCell from "flowbite-svelte/TableBodyCell.svelte";
  import TableBodyRow from "flowbite-svelte/TableBodyRow.svelte";

  let { data }: PageProps = $props();
</script>

<div class="mx-auto prose dark:prose-invert">{@html data.html}</div>

<Table class="mx-auto max-w-fit">
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>title</TableBodyCell>
      <TableBodyCell>{data.meta.title}</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>date</TableBodyCell>
      <TableBodyCell>{data.meta.date.toISOString()}</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>url</TableBodyCell>
      <TableBodyCell
        ><a href={resolve(`/posts/${data.slug}`)}>/posts/{data.slug}</a
        ></TableBodyCell
      >
    </TableBodyRow>
  </TableBody>
</Table>
