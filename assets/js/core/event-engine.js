/**
 * @file event-engine.js
 * @description Central internal event bus for Adslath engine lifecycle.
 */

import { ADSLATH } from './namespace.js';

export class EventEngine {
    constructor() {
        this.listeners = new Map();
    }

    on(eventName, callback) {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, new Set());
        }
        this.listeners.get(eventName).add(callback);
    }

    off(eventName, callback) {
        if (this.listeners.has(eventName)) {
            this.listeners.get(eventName).delete(callback);
        }
    }

    emit(eventName, payload = {}) {
        if (this.listeners.has(eventName)) {
            for (const callback of this.listeners.get(eventName)) {
                try {
                    callback(payload);
                } catch (err) {
                    console.error(`[Adslath][EventEngine] Error in listener for ${eventName}:`, err);
                }
            }
        }
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.eventEngine = new EventEngine();
}
