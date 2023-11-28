<script lang="ts">
    import { onMount } from "svelte";

    export let icon: string;
    let element: HTMLElement;

    onMount(async () => {
        const res = await fetch(icon); 
        element.innerHTML = await res.text(); 
    });
</script>

<div class="icon" bind:this={element}></div>

<style lang="scss">
    .icon{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 1.5rem;
        height: 1.5rem;
    }
</style>