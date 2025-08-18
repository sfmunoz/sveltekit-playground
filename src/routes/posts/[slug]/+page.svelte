<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
  } from "flowbite-svelte";
</script>

<div class="mx-auto prose">{@html data.html}</div>

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
