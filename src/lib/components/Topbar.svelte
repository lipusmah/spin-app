<script lang="ts">
    import logoImg from "../../assets/logo.png";
    import InstallButton from "./InstallButton.svelte";
</script>

<div class="row">
    <img src={logoImg}>
    <div>SPIN-app</div>
    <InstallButton></InstallButton>
</div>
<style>
    .row{
        font-weight: bold;
        font-size: large;
        height: 100%;
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
    }
</style>