const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Saves the beforeinstallprompt event for later use, gaves butInstall a toggeabble hidden class
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden',false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if(!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden',true);
});

// This clean the any references to the beforeinstallprompt saved before
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
