/**
 * @file domains-data.js
 * @description Centralized domain registry.
 */

import { ADSLATH } from '../core/namespace.js';

export const DOMAINS_DATA = Object.freeze({
    domains: [
        {
            id: "domain-001",
            hostname: "gaming.example.com",
            status: "active",
            allowSubdomains: false,
            allowedCategories: ["gaming", "technology"],
            blockedCategories: ["crypto"],
            allowedTags: [],
            blockedTags: [],
            defaultCategory: "gaming",
            fallbackEnabled: true,
            maxAdsPerPage: 3,
            allowedCardStyles: ["compact", "dark-glass", "high-impact"]
        },
        {
            id: "domain-002",
            hostname: "tech.example.com",
            status: "active",
            allowSubdomains: true,
            allowedCategories: ["technology", "software", "development", "hosting"],
            blockedCategories: [],
            allowedTags: [],
            blockedTags: [],
            defaultCategory: "technology",
            fallbackEnabled: true,
            maxAdsPerPage: 5,
            allowedCardStyles: ["compact", "banner", "horizontal-banner", "native-style"]
        },
        {
            id: "domain-003",
            hostname: "crypto.example.com",
            status: "active",
            allowSubdomains: false,
            allowedCategories: ["crypto", "finance"],
            blockedCategories: ["gaming"],
            allowedTags: [],
            blockedTags: [],
            defaultCategory: "crypto",
            fallbackEnabled: true,
            maxAdsPerPage: 2,
            allowedCardStyles: ["minimal", "dark-glass"]
        }
    ]
});

if (window.ADSLATH) {
    window.ADSLATH.data.domains = DOMAINS_DATA.domains;
}
