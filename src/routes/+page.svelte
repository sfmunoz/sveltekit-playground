<script lang="ts">
  import { resolve } from "$app/paths";
  import Button from "flowbite-svelte/Button.svelte";
  import Section from "flowbite-svelte-blocks/Section.svelte";
  import HeroHeader from "flowbite-svelte-blocks/HeroHeader.svelte";
</script>

<Section name="heroDefault">
  <HeroHeader>
    {#snippet h1()}SvelteKit playground{/snippet}
    {#snippet paragraph()}Under construction: for now you can go to the <Button
        color="secondary"
        size="xs"
        outline
        href={resolve("/posts")}>Posts</Button
      > page{/snippet}
  </HeroHeader>
</Section>
