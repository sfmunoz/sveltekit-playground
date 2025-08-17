<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { resolve } from "$app/paths";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<header class="prose mx-auto">
  <nav>
    <a href={resolve("/")}>home</a>
    <a href={resolve("/posts")}>posts</a>
  </nav>
  <h3>SvelteKit playground</h3>
</header>

<main class="prose mx-auto">{@render children?.()}</main>

<footer class="prose mx-auto">
  <p>
    <a href="https://github.com/sfmunoz/sveltekit-playground"
      >https://github.com/sfmunoz/sveltekit-playground</a
    >
  </p>
</footer>
