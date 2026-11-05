/**
 * @file analytics-engine.js
 * @description Central local analytics coordination layer.
 */
import { ImpressionTracker } from './impression-tracker.js';
import { ClickTracker } from './click-tracker.js';

export class AnalyticsEngine {
    static init() {
        ClickTracker.init();
        window.addEventListener('load', () => {
            ImpressionTracker.observeImpressions();
        });
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.analyticsEngine = AnalyticsEngine;
}
