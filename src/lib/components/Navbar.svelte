<script lang="ts">
    import { isDesktop } from "../stores/device";
    import Icon from "./Icon.svelte";
    import mapIcon from "../../assets/bx-map-alt.svg";
    import listIcon from "../../assets/bx-list-ul.svg";
    import infoIcon from "../../assets/bx-info-circle.svg";
    import active from "svelte-spa-router/active";
</script>

<div class="navbar" class:mobile={!$isDesktop}>
    <a class="navbar-icon" href="/#/" use:active={"/"}>
        <Icon icon={mapIcon}></Icon>
        <div class="title">karta</div>
    </a>
    <a class="navbar-icon" href="/#/seznam" use:active={"/seznam"}>
        <Icon icon={listIcon}></Icon>
        <div class="title">seznam</div>
    </a>
    <a class="navbar-icon" href="/#/info" use:active={"/info"}>
        <Icon icon={infoIcon}></Icon>
        <div class="title">info</div>
    </a>
</div>

<style lang="scss">
    .navbar-icon {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        padding: 0.375rem 0.675rem;
        border-radius: var(--border-radius-md);
        text-decoration: none;
        color: var(--color-text-01);
        border: 2px solid transparent;

        &:hover {
            transition: 0.3s;
            background-color: var(--color-hover);
            cursor: pointer;
        }
    }
    :global(a.active) {
        border: 2px solid var(--color-theme-01) !important;
    }
    .navbar {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 0.5rem;
        margin-top: 2rem;
    }
    .mobile {
    }
</style>
