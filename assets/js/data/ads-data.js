/**
 * @file ads-data.js
 * @description Centralized advertisement inventory database.
 */

import { ADSLATH } from '../core/namespace.js';

export const ADSLATH_DATA = Object.freeze({
    ads: [
        {
            id: "ad-001",
            title: "Ultra Gaming Rig Pro",
            description: "Experience next-gen performance with custom liquid cooling and maxed-out graphics capabilities.",
            image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
            targetUrl: "https://example.com/gaming-rig",
            categories: ["gaming", "technology"],
            tags: ["hardware", "pc", "gaming"],
            status: "active",
            priority: 8,
            weight: 15,
            campaignId: "campaign-001",
            startDate: "2026-01-01T00:00:00Z",
            endDate: "2026-12-31T23:59:59Z",
            allowedDomains: ["gaming.example.com", "tech.example.com"],
            blockedDomains: [],
            createdAt: "2026-01-01T00:00:00Z",
            updatedAt: "2026-01-01T00:00:00Z"
        },
        {
            id: "ad-002",
            title: "CloudScale Enterprise Hosting",
            description: "Lightning-fast distributed cloud infrastructure built for developers and high-growth apps.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            targetUrl: "https://example.com/cloudscale",
            categories: ["hosting", "technology", "development"],
            tags: ["cloud", "servers", "devops"],
            status: "active",
            priority: 10,
            weight: 20,
            campaignId: "campaign-002",
            startDate: null,
            endDate: null,
            allowedDomains: [],
            blockedDomains: ["crypto.example.com"],
            createdAt: "2026-01-05T00:00:00Z",
            updatedAt: "2026-01-05T00:00:00Z"
        },
        {
            id: "ad-003",
            title: "FinSecure Crypto Wallet",
            description: "Store, stake, and trade digital assets with military-grade cold storage security.",
            image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
            targetUrl: "https://example.com/finsecure",
            categories: ["crypto", "finance"],
            tags: ["bitcoin", "wallet", "security"],
            status: "active",
            priority: 6,
            weight: 10,
            campaignId: "campaign-003",
            startDate: "2026-02-01T00:00:00Z",
            endDate: "2026-06-30T23:59:59Z",
            allowedDomains: ["crypto.example.com", "finance.example.com"],
            blockedDomains: [],
            createdAt: "2026-01-10T00:00:00Z",
            updatedAt: "2026-01-10T00:00:00Z"
        }
    ]
});

if (window.ADSLATH) {
    window.ADSLATH_DATA = ADSLATH_DATA;
    window.ADSLATH.data.ads = ADSLATH_DATA.ads;
}
