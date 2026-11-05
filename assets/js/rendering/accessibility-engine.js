/**
 * @file accessibility-engine.js
 * @description Applies accessibility attributes to rendered advertisement elements.
 */
export class AccessibilityEngine {
    static applyAccessibility(cardEl, ad) {
        if (!cardEl) return;
        cardEl.setAttribute('role', 'region');
        cardEl.setAttribute('aria-label', `Advertisement: ${ad.title || 'Sponsored Content'}`);
    }
}
