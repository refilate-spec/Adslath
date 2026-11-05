/**
 * @file placement-discovery.js
 * @description Automatically discovers Adslath script integration tags on the host page.
 */
import { IntegrationUtils } from '../utils/integration-utils.js';

export class PlacementDiscovery {
    static discoverPlacements() {
        const scripts = document.querySelectorAll('script[src*="adslath-loader.js"]');
        const placements = [];

        scripts.forEach((script, index) => {
            const config = IntegrationUtils.parseScriptAttributes(script);
            placements.push({
                id: config.placementId || `place-script-${index + 1}`,
                placementType: config.placement,
                allowedCategories: config.categories,
                allowedTags: config.tags,
                preferredStyles: [config.cardStyle],
                theme: config.theme,
                label: config.label,
                debug: config.debug,
                scriptElement: script,
                status: 'active'
            });
        });

        return placements;
    }
}
