import Info from "./lib/pages/Info.svelte";
import List from "./lib/pages/List.svelte";
import Map from "./lib/pages/Map.svelte";
import NotFound from "./lib/pages/NotFound.svelte";

export const routes = {
    // Exact path
    '/': Map,
    '/seznam': List,
    '/info': Info,
    '*': NotFound,
}