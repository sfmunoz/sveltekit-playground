<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { resolve } from "$app/paths";
  
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<header>
  <nav>
    <a href={resolve("/")}>home</a>
    <a href={resolve("/posts")}>posts</a>
  </nav>
  <h1>SvelteKit playground</h1>
  <p>SvelteKit playground</p>
</header>

<main>{@render children?.()}</main>

<footer>
  <p>
    <a href="https://github.com/sfmunoz/sveltekit-playground"
      >https://github.com/sfmunoz/sveltekit-playground</a
    >
  </p>
</footer>
