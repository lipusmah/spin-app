<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { map } from "../stores/map";
    let element: HTMLElement;


    onMount(() => {
        map.setTarget(element);
    });
    onDestroy(() => {
    });
</script>

<div class="map" bind:this={element}>
    <div class="right-top">
        <div class="basemap-select-item"></div>
        <div class="basemap-select-item"></div>
    </div>
</div>

<style lang="scss">
    .map {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .right-top{
        z-index: 2rem;
        position: absolute;
        right: 1rem;
        top: 1rem;
        display: flex;
        flex-direction: row;
        z-index: 2;
        gap: 1rem;
        .basemap-select-item{
            width: 2rem;
            height: 2rem;
            border: 1px solid black
        }
    }
</style>
