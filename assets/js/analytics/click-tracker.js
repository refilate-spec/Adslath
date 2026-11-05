/**
 * @file click-tracker.js
 * @description Genuine user click tracking engine.
 */
import { EventCollector } from './event-collector.js';

export class ClickTracker {
    static init() {
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.adslath-card');
            if (card) {
                const adId = card.getAttribute('data-ad-id');
                const placementId = card.getAttribute('data-placement-id');
                if (adId && placementId) {
                    EventCollector.recordEvent('AD_CLICKED', {
                        adId,
                        placementId,
                        domain: window.location.hostname,
                        scope: 'local-browser'
                    });
                }
            }
        });
    }
}
