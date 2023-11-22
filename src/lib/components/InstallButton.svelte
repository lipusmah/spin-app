<script lang="ts">
    let showInstallButton = false;
    let deferredPrompt: any;

    window.addEventListener("beforeinstallprompt", (event) => {
        // Prevent the default browser prompt
        event.preventDefault();
        console.log("install can")
        // Show your custom install button
        showInstallButton = true;
        // Store the event for later use
        deferredPrompt = event;
    });

    function installApp() {
        // Trigger the browser's install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the A2HS prompt");
            } else {
                console.log("User dismissed the A2HS prompt");
            }
            // Reset the install button state
            showInstallButton = false;
            deferredPrompt = null;
        });
    }
</script>

<!-- Your other content -->
{#if showInstallButton}
    <button on:click={installApp}>Install App</button>
{/if}

<style>
    /* Your styles here */
</style>
