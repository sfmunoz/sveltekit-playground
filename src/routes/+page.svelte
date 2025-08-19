<script lang="ts">
  import { resolve } from "$app/paths";
  import { Button } from "flowbite-svelte";
  import { Section, HeroHeader } from "flowbite-svelte-blocks";
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
