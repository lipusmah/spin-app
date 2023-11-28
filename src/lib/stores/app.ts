import { writable, type Writable } from "svelte/store";

export let selectedBasemap: Writable<"topo" | "photo"> = writable("topo");