/**
 * @file namespace.js
 * @description Central namespace management for ADSLATH with duplicate prevention.
 */

import { CONSTANTS } from './constants.js';

if (window.ADSLATH) {
    console.warn('[Adslath] Namespace window.ADSLATH is already initialized. Skipping re-initialization.');
} else {
    window.ADSLATH = {
        version: CONSTANTS.VERSION,
        config: {},
        data: {},
        modules: {},
        utils: {},
        state: {
            initializedAt: new Date().toISOString(),
            activePlacementsCount: 0
        }
    };
}

export const ADSLATH = window.ADSLATH;
