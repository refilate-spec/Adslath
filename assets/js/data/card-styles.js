/**
 * @file card-styles.js
 * @description Central presentation registry for advertisement card styles.
 */

import { ADSLATH } from '../core/namespace.js';

export const CARD_STYLES = Object.freeze({
    styles: [
        { id: "compact", displayName: "Compact Card", layoutType: "vertical", cssClass: "adslath-card-compact", supportedDimensions: { minWidth: 250, maxWidth: 350, minHeight: 150, maxHeight: 250 }, imagePosition: "top", contentPosition: "bottom", ctaPosition: "bottom-right", responsiveConfig: { stackOnMobile: true }, status: "active" },
        { id: "dark-glass", displayName: "Dark Glassmorphism", layoutType: "vertical", cssClass: "adslath-card-glass", supportedDimensions: { minWidth: 280, maxWidth: 400, minHeight: 200, maxHeight: 350 }, imagePosition: "background", contentPosition: "overlay", ctaPosition: "bottom-center", responsiveConfig: { stackOnMobile: true }, status: "active" },
        { id: "premium-image", displayName: "Premium Image Showcase", layoutType: "vertical", cssClass: "adslath-card-premium", supportedDimensions: { minWidth: 300, maxWidth: 500, minHeight: 300, maxHeight: 450 }, imagePosition: "top-full", contentPosition: "bottom", ctaPosition: "full-width", responsiveConfig: { stackOnMobile: true }, status: "active" },
        { id: "horizontal-banner", displayName: "Horizontal Banner", layoutType: "horizontal", cssClass: "adslath-card-banner-h", supportedDimensions: { minWidth: 600, maxWidth: 1200, minHeight: 100, maxHeight: 200 }, imagePosition: "left", contentPosition: "right", ctaPosition: "right", responsiveConfig: { stackOnMobile: true, breakpoint: 768 }, status: "active" },
        { id: "vertical-promo", displayName: "Vertical Sidebar Promo", layoutType: "vertical", cssClass: "adslath-card-promo-v", supportedDimensions: { minWidth: 200, maxWidth: 300, minHeight: 400, maxHeight: 600 }, imagePosition: "top", contentPosition: "middle", ctaPosition: "bottom", responsiveConfig: { hideOnMobile: false }, status: "active" },
        { id: "minimal", displayName: "Minimal Text Card", layoutType: "vertical", cssClass: "adslath-card-minimal", supportedDimensions: { minWidth: 200, maxWidth: 350, minHeight: 100, maxHeight: 200 }, imagePosition: "none", contentPosition: "full", ctaPosition: "inline", responsiveConfig: { stackOnMobile: true }, status: "active" },
        { id: "high-impact", displayName: "High Impact Modal / Overlay", layoutType: "overlay", cssClass: "adslath-card-high-impact", supportedDimensions: { minWidth: 400, maxWidth: 800, minHeight: 300, maxHeight: 600 }, imagePosition: "center", contentPosition: "overlay", ctaPosition: "floating", responsiveConfig: { fullscreenOnMobile: true }, status: "active" },
        { id: "native-style", displayName: "Native Feed Integration", layoutType: "horizontal", cssClass: "adslath-card-native", supportedDimensions: { minWidth: 350, maxWidth: 700, minHeight: 120, maxHeight: 220 }, imagePosition: "left-small", contentPosition: "right", ctaPosition: "inline", responsiveConfig: { stackOnMobile: false }, status: "active" }, 
        {
    id: "custom-grid",
    displayName: "Custom Grid Card",
    layoutType: "vertical",
    cssClass: "adslath-card-custom",
    supportedDimensions: { minWidth: 200, maxWidth: 400, minHeight: 200, maxHeight: 400 },
    imagePosition: "top",
    contentPosition: "bottom",
    ctaPosition: "bottom-right",
    responsiveConfig: { stackOnMobile: true },
    status: "active"
}

    ]
});

if (window.ADSLATH) {
    window.ADSLATH.data.cardStyles = CARD_STYLES.styles;
}
