/**
 * @file selection-engine.js
 * @description Centralized selection algorithm coordinator using scoring and weighted random selection.
 */

import { ScoringUtils } from '../utils/scoring-utils.js';
import { SelectionUtils } from '../utils/selection-utils.js';

export class SelectionEngine {
    static selectAdvertisement(eligibleAds, placement, domainConfig, historyState = {}) {
        if (!Array.isArray(eligibleAds) || eligibleAds.length === 0) return null;

        const scoredAds = eligibleAds.map(ad => ({
            ad,
            score: ScoringUtils.calculateScore(ad, placement, domainConfig, historyState)
        }));

        return SelectionUtils.weightedRandomSelect(scoredAds);
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.selectionEngine = SelectionEngine;
}
