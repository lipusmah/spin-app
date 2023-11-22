<script lang="ts">
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher(); 
    const click = () => dispatch("click");
    export let disabled = false;
    export let icon: string;
    export let text: string;
</script>


<button on:click={click} {disabled}></button>

<style>
    button{

    }
</style>