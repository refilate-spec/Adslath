/**
 * @file adslath-client.js
 * @description Communication client bridging the public loader and Phase 2 decision engine.
 */
import { ADSLATH } from '../core/namespace.js';
import { PlacementDiscovery } from './placement-discovery.js';
import { ADSLATH_DATA } from '../data/ads-data.js';
import { DOMAINS_DATA } from '../data/domains-data.js';
import { CATEGORIES_DATA } from '../data/categories-data.js';
import { PLACEMENT_DATA } from '../data/placement-data.js';
import { SCHEDULE_DATA } from '../data/schedule-data.js';
import { SETTINGS_DATA } from '../data/settings-data.js';

export class AdslathClient {
    static requestAssignments(discoveredPlacements = []) {
        if (window.ADSLATH && window.ADSLATH.engine) {
            // Merge discovered placements with system placements
            const allPlacements = [...PLACEMENT_DATA.placements, ...discoveredPlacements];
            return window.ADSLATH.engine.run({
                ads: ADSLATH_DATA.ads,
                domains: DOMAINS_DATA.domains,
                categories: CATEGORIES_DATA.categories,
                placements: allPlacements,
                schedules: SCHEDULE_DATA.schedules,
                settings: SETTINGS_DATA
            });
        }
        return [];
    }
}
