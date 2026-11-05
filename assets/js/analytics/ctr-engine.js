/**
 * @file ctr-engine.js
 * @description Pure CTR calculation engine with zero-division safety.
 */
export class CtrEngine {
    static calculate(impressions, clicks) {
        if (!impressions || impressions === 0) return '0.00%';
        const ctr = (clicks / impressions) * 100;
        return `${ctr.toFixed(2)}%`;
    }
}
