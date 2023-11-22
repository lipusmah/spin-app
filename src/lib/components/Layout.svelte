<script lang="ts">
    import { checkDevice, isDesktop } from "../stores/device";
    import Topbar from "./Topbar.svelte";
    checkDevice();
    $: console.log($isDesktop);
</script>

<div class="root" class:mobile={!$isDesktop}>
    <div class="topbar">
        <Topbar></Topbar>
    </div>
    <div class="content" />
    <div class="navigation" />
</div>

<style lang="scss">
    .root {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-areas:
            "top top"
            "navigation content";
        grid-template-rows: 3rem 1fr;
        grid-template-columns: 4rem 1fr;
    }
    .mobile {
        display: grid;
        grid-template-areas:
            "top"
            "content"
            "navigation";
        grid-template-rows: 3rem 1fr 4rem;
        grid-template-columns: 1fr;
    }
    .topbar {
        z-index: 3;
        grid-area: top;
        box-shadow: var(--box-shadow);
    }
    .content {
        grid-area: content;
    }
    .navigation {
        z-index: 1;
        grid-area: navigation;
        box-shadow: var(--box-shadow);
    }
</style>
