/**
 * @file placement-engine.js
 * @description Multi-placement decision engine with duplicate avoidance across placements.
 */

import { FilteringUtils } from '../utils/filtering-utils.js';
import { CampaignEngine } from './campaign-engine.js';
import { FrequencyEngine } from './frequency-engine.js';
import { SelectionEngine } from './selection-engine.js';

export class PlacementEngine {
    static processPlacements(placements = [], ads = [], domainHostname, domainConfig, schedules = [], settings = {}) {
        const assignments = [];
        const usedAdIds = new Set();
        const maxImpressions = settings.frequencyPreferences?.maxImpressionsPerUserPerDay || 25;

        for (const placement of placements) {
            if (placement.status !== 'active') continue;

            // 1. Filter eligible ads for this placement
            const eligibleAds = ads.filter(ad => {
                if (!FilteringUtils.passesMandatoryChecks(ad)) return false;
                if (!FilteringUtils.passesDomainRestrictions(ad, domainHostname, domainConfig)) return false;
                if (!FilteringUtils.passesCategoryAndTagRules(ad, placement, domainConfig)) return false;
                if (!CampaignEngine.isCampaignActive(ad.campaignId, schedules)) return false;
                if (!FrequencyEngine.checkFrequency(ad.id, maxImpressions)) return false;
                return true;
            });

            // 2. Select ad with duplicate avoidance across adjacent placements if possible
            let nonDuplicateAds = eligibleAds.filter(ad => !usedAdIds.has(ad.id));
            let selectedAd = null;

            if (nonDuplicateAds.length > 0) {
                selectedAd = SelectionEngine.selectAdvertisement(nonDuplicateAds, placement, domainConfig);
            } else if (eligibleAds.length > 0) {
                // Fallback if all eligible ads were used and only single inventory remains
                selectedAd = SelectionEngine.selectAdvertisement(eligibleAds, placement, domainConfig);
            }

            if (selectedAd) {
                usedAdIds.add(selectedAd.id);
                FrequencyEngine.recordImpression(selectedAd.id);
                assignments.push({
                    placementId: placement.id,
                    instanceId: `inst-${Math.random().toString(36).substring(2, 9)}`,
                    placementType: placement.placementType,
                    selectedAd,
                    assignedCardStyle: placement.preferredStyles?.[0] || 'compact',
                    status: 'success'
                });
            } else {
                assignments.push({
                    placementId: placement.id,
                    instanceId: `inst-${Math.random().toString(36).substring(2, 9)}`,
                    placementType: placement.placementType,
                    selectedAd: null,
                    assignedCardStyle: null,
                    status: 'fallback-empty'
                });
            }
        }

        return assignments;
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.placementEngine = PlacementEngine;
}
