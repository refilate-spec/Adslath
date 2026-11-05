/**
 * @file impression-tracker.js
 * @description IntersectionObserver-based visibility impression tracker ensuring local scope.
 */
import { EventCollector } from './event-collector.js';

export class ImpressionTracker {
    static observeImpressions() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const adId = card.getAttribute('data-ad-id');
                    const placementId = card.getAttribute('data-placement-id');

                    if (adId && placementId && !card.dataset.impressionRecorded) {
                        card.dataset.impressionRecorded = 'true';
                        EventCollector.recordEvent('AD_VIEWED', {
                            adId,
                            placementId,
                            domain: window.location.hostname,
                            scope: 'local-browser'
                        });
                        obs.unobserve(card);
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.adslath-card').forEach(card => {
            observer.observe(card);
        });
    }
}
