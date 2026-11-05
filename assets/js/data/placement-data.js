/**
 * @file placement-data.js
 * @description Centralized reusable placement configurations.
 */

import { ADSLATH } from '../core/namespace.js';

export const PLACEMENT_DATA = Object.freeze({
    placements: [
        { id: "place-auto-01", placementType: "auto", allowedCategories: ["gaming", "technology", "hosting"], preferredStyles: ["compact", "native-style"], maximumDimensions: { width: "100%", height: "auto" }, fallbackBehavior: "default-house-ad", status: "active" },
        { id: "place-sidebar-01", placementType: "vertical", allowedCategories: [], preferredStyles: ["vertical-promo", "compact"], maximumDimensions: { width: "300px", height: "600px" }, fallbackBehavior: "hide", status: "active" },
        { id: "place-banner-01", placementType: "horizontal", allowedCategories: ["technology", "development", "hosting"], preferredStyles: ["horizontal-banner"], maximumDimensions: { width: "100%", height: "150px" }, fallbackBehavior: "default-house-ad", status: "active" }
    ]
});

if (window.ADSLATH) {
    window.ADSLATH.data.placements = PLACEMENT_DATA.placements;
}
