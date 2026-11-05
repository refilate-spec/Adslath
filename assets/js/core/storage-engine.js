/**
 * @file storage-engine.js
 * @description Centralized robust browser storage abstraction with fallback.
 */

import { CONSTANTS } from './constants.js';

export class StorageEngine {
    static get(key) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (err) {
            console.warn(`[Adslath][StorageEngine] Failed to read key ${key}:`, err);
            return null;
        }
    }

    static set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (err) {
            console.warn(`[Adslath][StorageEngine] Failed to write key ${key}:`, err);
            return false;
        }
    }

    static getSession(key) {
        try {
            const raw = sessionStorage.getItem(key);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (err) {
            return null;
        }
    }

    static setSession(key, value) {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (err) {
            return false;
        }
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.storageEngine = StorageEngine;
}
