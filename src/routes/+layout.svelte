<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { resolve } from "$app/paths";
  import { Navbar, NavBrand, NavUl, NavLi } from "flowbite-svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<header>
  <Navbar>
    <NavBrand href={resolve("/")}>
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        >SvelteKit playground</span
      >
    </NavBrand>
    <NavUl>
      <NavLi href={resolve("/")}>Home</NavLi>
      <NavLi href={resolve("/posts")}>Posts</NavLi>
    </NavUl>
  </Navbar>
</header>

<main class="prose mx-auto">{@render children?.()}</main>

<footer class="prose mx-auto">
  <p>
    <a href="https://github.com/sfmunoz/sveltekit-playground"
      >https://github.com/sfmunoz/sveltekit-playground</a
    >
  </p>
</footer>
