# SvelteKit playground

This is a natural follow up on the following projects since I'm looking up the best way to render my **gh-pages** with top versatility:

- https://github.com/sfmunoz/svelte-playground
- https://github.com/sfmunoz/hugo-playground
- https://github.com/sfmunoz/jekyll-playground

Contents:

- [References](#references)
- [sv (original doc)](#sv-original-doc)
  - [Creating a project](#creating-a-project)
  - [Developing](#developing)
  - [Building](#building)

## References

- [https://svelte.dev/](https://svelte.dev/)
  - [https://svelte.dev/docs/svelte](https://svelte.dev/docs/svelte)
  - [https://svelte.dev/docs/kit](https://svelte.dev/docs/kit)
  - [https://svelte.dev/docs/cli](https://svelte.dev/docs/cli)
- [https://github.com/sveltejs/svelte](https://github.com/sveltejs/svelte)
- [https://vite.dev/](https://vite.dev/)

## sv (original doc)

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
