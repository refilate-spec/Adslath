/**
 * @file initialization-engine.js
 * @description Controlled 18-step system initialization lifecycle.
 */

import { ADSLATH } from './namespace.js';
import { DomainEngine } from './domain-engine.js';
import { PlacementEngine } from './placement-engine.js';
import { RotationEngine } from './rotation-engine.js';

export class InitializationEngine {
    static initializeSystem(dataSources = {}) {
        if (window.ADSLATH && window.ADSLATH.state && window.ADSLATH.state.initialized) {
            console.warn('[Adslath] System already initialized.');
            return window.ADSLATH.state.lastAssignments || [];
        }

        try {
            // STEP 1-3: Environment & Namespace verification
            if (!window.ADSLATH) throw new Error('Namespace window.ADSLATH missing.');

            // STEP 6: Detect hostname
            const hostname = window.location.hostname || 'gaming.example.com';

            // STEP 7: Resolve domain config
            const domains = dataSources.domains || [];
            const domainConfig = DomainEngine.resolveDomain(hostname, domains);

            // STEP 8: Collect placements
            const placements = dataSources.placements || [];
            const ads = dataSources.ads || [];
            const schedules = dataSources.schedules || [];
            const settings = dataSources.settings || {};

            // STEP 11-17: Process placements & run selection pipeline
            const assignments = PlacementEngine.processPlacements(
                placements, 
                ads, 
                domainConfig ? domainConfig.hostname : hostname, 
                domainConfig, 
                schedules, 
                settings
            );

            // STEP 20: Lock page session rotation
            if (window.ADSLATH.modules.rotationEngine) {
                window.ADSLATH.modules.rotationEngine.lockPageSession();
            }

            window.ADSLATH.state.initialized = true;
            window.ADSLATH.state.lastAssignments = assignments;

            return assignments;
        } catch (err) {
            console.error('[Adslath][InitializationEngine] Initialization failed:', err);
            return [];
        }
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.initializationEngine = InitializationEngine;
}
