<script lang="ts">
    import { serviceworker, update_ready } from "./lib/stores/serviceworker";
    import { dataLoader, locationFeatures } from "./lib/stores/data";
    import Layout from "./lib/components/Layout.svelte";
    import { checkDevice } from "./lib/stores/device";
    serviceworker.init();

    $: if ($update_ready) {
        console.log("install new");
        serviceworker.installNewSW();
    }
    checkDevice();
    dataLoader();
</script>

{#if $locationFeatures}
    <Layout />
{/if}

<!-- <InstallButton></InstallButton> -->

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .read-the-docs {
        color: #888;
    }
</style>
