import {  writable, type Writable } from "svelte/store";

export const isDesktop: Writable<boolean> = writable(false);
export const isOnline: Writable<boolean> = writable(true);

export function checkDevice() {
    if (window.matchMedia('only screen and (max-width: 480px)').matches) {
        isDesktop.set(false);
    }
    else {
        isDesktop.set(true);
    }
}

export function updateOnlineStatus() {
    if (window.navigator.onLine){
        isOnline.set(true);
    } else {
        isOnline.set(false);
    }
}

export function getLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
    });
}