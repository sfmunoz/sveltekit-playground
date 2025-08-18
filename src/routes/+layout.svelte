<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { resolve } from "$app/paths";
  import { Navbar, NavBrand, NavUl, NavLi } from "flowbite-svelte";
  import {
    Footer,
    FooterBrand,
    FooterLinkGroup,
    FooterLink,
  } from "flowbite-svelte";

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

<Footer footerType="default">
  <div class="mx-auto max-w-screen-xl text-center">
    <FooterBrand
      href={resolve("/")}
      alt="SvelteKit playground"
      name="SvelteKit playground"
      aClass="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
    />
    <p class="my-6 text-gray-500 dark:text-gray-400">
      Simple project to learn and play with SvelteKit
    </p>
    <FooterLinkGroup
      class="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white"
    >
      <FooterLink aClass="mr-4 hover:underline md:mr-6" href={resolve("/")}
        >Home</FooterLink
      >
      <FooterLink aClass="mr-4 hover:underline md:mr-6" href={resolve("/posts")}
        >Posts</FooterLink
      >
      <FooterLink
        aClass="mr-4 hover:underline md:mr-6"
        href="https://github.com/sfmunoz">Github</FooterLink
      >
    </FooterLinkGroup>
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2025 <a href="https://sfmunoz.com/" class="hover:underline">sfmunoz</a
      >. All Rights Reserved.
    </span>
  </div>
</Footer>
