/**
 * @file adslath-config.js
 * @description Centralized system configuration for the Adslath advertising network.
 */

import { ADSLATH } from './namespace.js';

export const ADSLATH_CONFIG = Object.freeze({
    systemName: 'Adslath Modular Advertising Network',
    version: '1.0.0',
    defaultCardStyle: 'compact',
    defaultPlacementMode: 'auto',
    defaultCategoryMatchingMode: 'exact',
    maxPlacementsPerPage: 5,
    defaultFallbackBehavior: 'default-house-ad',
    storageVersion: '1.0',
    debugMode: true,
    imageLoadingSettings: {
        lazyLoad: true,
        placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiLz48L3N2Zz4=',
        timeoutMs: 5000
    },
    defaultTrackingConfiguration: {
        enabled: false,
        respectDoNotTrack: true,
        sampleRate: 1.0
    },
    rotationPolicy: 'weighted-random'
});

// Bind configuration to central namespace safely
if (ADSLATH) {
    ADSLATH.config = ADSLATH_CONFIG;
}
