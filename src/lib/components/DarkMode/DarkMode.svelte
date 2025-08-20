<script lang="ts">
  import { Sun, Moon, Monitor, CircleQuestionMark } from "@lucide/svelte";
  import appCss from "@/app.css?raw";
  let lightDT = $state("light");
  let darkDT = $state("dark");
  // themes: light --default, dark --prefersdark;
  // themes: lemonade --default, luxury --prefersdark;
  // themes: autumn --default, business --prefersdark, pastel, garden;
  const re = /^\s*themes:\s*(.+)\s+\--default\s*,\s*(.+)\s+--prefersdark[,;]/;
  const lines = appCss.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const m = re.exec(lines[i]);
    if (!m) continue;
    lightDT = m[1];
    darkDT = m[2];
    break;
  }
  type UsrTheme = "light" | "dark" | "system";
  type SysTheme = "light" | "dark" | "unknown";
  const t: string | null = localStorage.getItem("theme");
  let usrTheme: UsrTheme = $state(t === "light" || t === "dark" ? t : "system");
  let lightMedia: boolean = $state(false);
  let darkMedia: boolean = $state(false);
  let sysTheme: SysTheme = $derived(
    lightMedia === darkMedia ? "unknown" : darkMedia ? "dark" : "light"
  );
  let dataTheme: string = $derived(
    usrTheme === "light"
      ? lightDT
      : usrTheme === "dark"
        ? darkDT
        : sysTheme === "dark"
          ? darkDT
          : lightDT
  );
  $effect(() => localStorage.setItem("theme", usrTheme));
  $effect(() => document.documentElement.setAttribute("data-theme", dataTheme));
  $effect(() => {
    const m = window.matchMedia("(prefers-color-scheme: light)");
    lightMedia = m.matches;
    const f = (e: MediaQueryListEvent) => (lightMedia = e.matches);
    m.addEventListener("change", f);
    return () => {
      m.removeEventListener("change", f);
    };
  });
  $effect(() => {
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    darkMedia = m.matches;
    const f = (e: MediaQueryListEvent) => (darkMedia = e.matches);
    m.addEventListener("change", f);
    return () => {
      m.removeEventListener("change", f);
    };
  });
  const usrThemes: UsrTheme[] = ["light", "system", "dark"];
  const overC =
    "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[58%] scale-60 z-10";
</script>

{#snippet icon(t: UsrTheme)}
  {#if t === "light"}
    <Sun />
  {:else if t === "dark"}
    <Moon />
  {:else if t === "system"}
    <Monitor />
    {#if sysTheme === "light"}
      <Sun class={overC} />
    {:else if sysTheme === "dark"}
      <Moon class={overC} />
    {:else}
      <CircleQuestionMark class={overC} />
    {/if}
  {/if}
{/snippet}

<div
  class="join join-vertical lg:join-horizontal tooltip tooltip-bottom"
  data-tip="light={lightDT} | dark={darkDT}"
>
  {#each usrThemes as t (t)}
    <button
      id={t}
      class="btn btn-xs join-item"
      disabled={usrTheme === t}
      onclick={() => (usrTheme = t)}>{@render icon(t)}</button
    >
  {/each}
</div>
