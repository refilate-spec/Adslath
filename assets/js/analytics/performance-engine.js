/**
 * @file performance-engine.js
 * @description Aggregates local performance metrics from stored event records.
 */
import { EventCollector } from './event-collector.js';
import { CtrEngine } from './ctr-engine.js';

export class PerformanceEngine {
    static getMetrics() {
        const events = EventCollector.getEvents();
        const impressions = events.filter(e => e.type === 'AD_VIEWED').length;
        const clicks = events.filter(e => e.type === 'AD_CLICKED').length;
        const ctr = CtrEngine.calculate(impressions, clicks);

        return {
            impressions,
            clicks,
            ctr,
            scope: 'local-browser'
        };
    }
}
