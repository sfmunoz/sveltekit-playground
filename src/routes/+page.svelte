<script lang="ts">
  import { resolve } from "$app/paths";
  import { Section, HeroHeader } from "flowbite-svelte-blocks";
</script>

<Section name="heroDefault">
  <HeroHeader>
    {#snippet h1()}SvelteKit playground{/snippet}
    {#snippet paragraph()}Under construction: for now you can go to the <a
        href={resolve("/posts")}
        class="underline">Posts</a
      > page{/snippet}
  </HeroHeader>
</Section>
