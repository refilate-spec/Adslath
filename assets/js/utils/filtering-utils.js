/**
 * @file filtering-utils.js
 * @description Pure filtering logic for ads against domain rules, categories, tags, and campaigns.
 */

import { UrlUtils } from './url-utils.js';

export class FilteringUtils {
    static passesMandatoryChecks(ad) {
        if (!ad || typeof ad !== 'object') return false;
        if (!ad.id || typeof ad.id !== 'string') return false;
        if (ad.status !== 'active') return false;
        if (!UrlUtils.isValidTargetUrl(ad.targetUrl)) return false;
        if (!UrlUtils.isValidImageUrl(ad.image)) return false;
        return true;
    }

    static passesDomainRestrictions(ad, domainHostname, domainConfig) {
        if (!domainConfig) return false;
        
        // Check explicit blocked domains on ad
        if (Array.isArray(ad.blockedDomains) && ad.blockedDomains.includes(domainHostname)) {
            return false;
        }

        // Check explicit allowed domains on ad (if specified)
        if (Array.isArray(ad.allowedDomains) && ad.allowedDomains.length > 0) {
            const isAllowed = ad.allowedDomains.some(dom => 
                UrlUtils.matchHostname(domainHostname, dom, domainConfig.allowSubdomains)
            );
            if (!isAllowed) return false;
        }

        return true;
    }

    static passesCategoryAndTagRules(ad, placement, domainConfig) {
        // Blocked categories check
        if (domainConfig && Array.isArray(domainConfig.blockedCategories)) {
            const hasBlockedCat = ad.categories.some(cat => domainConfig.blockedCategories.includes(cat));
            if (hasBlockedCat) return false;
        }

        // Blocked tags check
        if (domainConfig && Array.isArray(domainConfig.blockedTags) && Array.isArray(ad.tags)) {
            const hasBlockedTag = ad.tags.some(tag => domainConfig.blockedTags.includes(tag));
            if (hasBlockedTag) return false;
        }

        // Category matching requirement
        const placementCats = placement.allowedCategories || [];
        const domainCats = domainConfig ? domainConfig.allowedCategories || [] : [];
        
        if (placementCats.length > 0) {
            const matchesPlacement = ad.categories.some(cat => placementCats.includes(cat));
            if (!matchesPlacement) return false;
        }

        if (domainCats.length > 0) {
            const matchesDomain = ad.categories.some(cat => domainCats.includes(cat));
            if (!matchesDomain) return false;
        }

        return true;
    }
}
