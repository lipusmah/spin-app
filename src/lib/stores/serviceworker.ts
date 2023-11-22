import { writable, type Writable } from 'svelte/store';
import { registerSW } from 'virtual:pwa-register';

class ServiceWorker {
	update_ready: Writable<boolean>;
	reloadHandle: () => Promise<void>;
	swRegistration: ServiceWorkerRegistration;
	v = 1;

	constructor(update_ready: Writable<boolean>) {
		this.update_ready = update_ready;
	}

	init() {
		console.log('@sw-store > v', this.v);
		this.reloadHandle = registerSW({
			onNeedRefresh: () => {
				this.update_ready.set(true);
				console.log('@sw-store > onNeedRefresh');
			},
			onOfflineReady: () => {
				console.log('@sw-store > onOfflineReady');
			},
			onRegistered: (swr) => {
				console.log('@sw-store > onRegistered');
				this.processRegistration(swr);
			},
			onRegisterError: (error) => {
				console.log('@sw-store > onRegisterError');
				console.log('SW registration error', error);
			}
		});
	}

	processRegistration(swr: ServiceWorkerRegistration) {
		console.log('@sw-store > processRegistration', swr);
		this.swRegistration = swr;
	}

	installNewSW() {
		console.log('@sw-store > installNewSW');
		return this.reloadHandle();
	}
}

export const update_ready = writable(false);
export const serviceworker = new ServiceWorker(update_ready);