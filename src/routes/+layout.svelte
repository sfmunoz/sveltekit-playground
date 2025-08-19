<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { resolve } from "$app/paths";
  import Navbar from "flowbite-svelte/Navbar.svelte";
  import NavBrand from "flowbite-svelte/NavBrand.svelte";
  import NavUl from "flowbite-svelte/NavUl.svelte";
  import NavLi from "flowbite-svelte/NavLi.svelte";
  import Footer from "flowbite-svelte/Footer.svelte";
  import FooterBrand from "flowbite-svelte/FooterBrand.svelte";
  import FooterLinkGroup from "flowbite-svelte/FooterLinkGroup.svelte";
  import FooterLink from "flowbite-svelte/FooterLink.svelte";
  import Button from "flowbite-svelte/Button.svelte";

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
      <NavLi href={resolve("/")}
        ><Button color="primary" size="xs" outline>Home</Button></NavLi
      >
      <NavLi href={resolve("/posts")}
        ><Button color="secondary" size="xs" outline>Posts</Button></NavLi
      >
    </NavUl>
  </Navbar>
</header>

<main>{@render children?.()}</main>

<Footer footerType="default">
  <div class="mx-auto max-w-screen-xl text-center">
    <FooterBrand
      href="https://github.com/sfmunoz/sveltekit-playground"
      name="SvelteKit playground @ Github"
      aClass="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
    />
    <p class="my-6 text-gray-500 dark:text-gray-400">
      Simple project to learn and play with SvelteKit
    </p>
    <FooterLinkGroup
      class="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white"
    >
      <FooterLink class="mr-4 hover:underline md:mr-6" href={resolve("/")}
        >Home</FooterLink
      >
      <FooterLink class="mr-4 hover:underline md:mr-6" href={resolve("/posts")}
        >Posts</FooterLink
      >
      <FooterLink
        class="mr-4 hover:underline md:mr-6"
        href="https://github.com/sfmunoz">Github</FooterLink
      >
    </FooterLinkGroup>
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2025 <a href="https://sfmunoz.com/" class="hover:underline">sfmunoz</a
      >. All Rights Reserved.
    </span>
  </div>
</Footer>
