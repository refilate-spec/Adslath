/**
 * @file adslath-loader.js
 * @description Universal single-script loader supporting singleton initialization and multi-placement rendering.
 */
import { ADSLATH } from '../core/namespace.js';
import '../core/adslath-config.js';
import '../core/event-engine.js';
import '../core/storage-engine.js';
import '../core/validation-engine.js';
import '../core/tracking-engine.js';
import '../core/campaign-engine.js';
import '../core/frequency-engine.js';
import '../core/domain-engine.js';
import '../core/category-engine.js';
import '../core/selection-engine.js';
import '../core/placement-engine.js';
import '../core/rotation-engine.js';
import '../core/initialization-engine.js';
import '../core/ad-engine.js';

import { PlacementDiscovery } from './placement-discovery.js';
import { AdslathClient } from './adslath-client.js';
import { RenderEngine } from '../rendering/render-engine.js';

(function () {
    if (window.ADSLATH_LOADED) {
        return; // Singleton check
    }
    window.ADSLATH_LOADED = true;

    function init() {
        const discovered = PlacementDiscovery.discoverPlacements();
        const assignments = AdslathClient.requestAssignments(discovered);

        discovered.forEach(placement => {
            const assignment = assignments.find(a => a.placementId === placement.id);
            RenderEngine.renderPlacement(placement, assignment);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
