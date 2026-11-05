/**
 * @file settings-data.js
 * @description Centralized user and system settings data.
 */

import { ADSLATH } from '../core/namespace.js';

export const SETTINGS_DATA = Object.freeze({
    defaultCategories: ["technology", "gaming"],
    defaultCardStyle: "compact",
    placementLimits: { maxPerContainer: 3, globalMaxPerPage: 10 },
    rotationPreferences: { policy: "weighted-random", intervalSeconds: 30 },
    frequencyPreferences: { maxImpressionsPerUserPerDay: 25, cooldownSeconds: 60 },
    fallbackPreferences: { enabled: true, fallbackAdId: "ad-002" },
    imageLoadingPreferences: { lazy: true, placeholderType: "svg" },
    trackingPreferences: { analyticsEnabled: false, anonymizeIp: true }
});

if (window.ADSLATH) {
    window.ADSLATH.data.settings = SETTINGS_DATA;
}
