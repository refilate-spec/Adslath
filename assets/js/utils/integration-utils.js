/**
 * @file integration-utils.js
 * @description Integration attribute parsing and normalization utilities.
 */
export class IntegrationUtils {
    static parseScriptAttributes(scriptEl) {
        if (!scriptEl) return {};
        return {
            categories: scriptEl.getAttribute('data-categories') ? scriptEl.getAttribute('data-categories').split(',').map(s => s.trim()) : [],
            tags: scriptEl.getAttribute('data-tags') ? scriptEl.getAttribute('data-tags').split(',').map(s => s.trim()) : [],
            placement: scriptEl.getAttribute('data-placement') || 'auto',
            placementId: scriptEl.getAttribute('data-placement-id') || `place-${Math.random().toString(36).substring(2, 8)}`,
            cardStyle: scriptEl.getAttribute('data-card-style') || 'compact',
            theme: scriptEl.getAttribute('data-theme') || 'light',
            label: scriptEl.getAttribute('data-label') || 'Sponsored',
            debug: scriptEl.getAttribute('data-debug') === 'true'
        };
    }
}
