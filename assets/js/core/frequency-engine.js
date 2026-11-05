/**
 * @file frequency-engine.js
 * @description Frequency capping and impression limits enforcement.
 */

import { StorageEngine } from './storage-engine.js';

export class FrequencyEngine {
    static checkFrequency(adId, maxImpressions = 25) {
        const history = StorageEngine.getSession('adslath_freq_history') || {};
        const count = history[adId] || 0;
        return count < maxImpressions;
    }

    static recordImpression(adId) {
        const history = StorageEngine.getSession('adslath_freq_history') || {};
        history[adId] = (history[adId] || 0) + 1;
        StorageEngine.setSession('adslath_freq_history', history);
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.frequencyEngine = FrequencyEngine;
}
