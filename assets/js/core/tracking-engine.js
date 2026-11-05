/**
 * @file tracking-engine.js
 * @description Event hooks for selection, rendering, viewing, and clicks.
 */

export class TrackingEngine {
    constructor() {
        this.events = [];
    }

    track(eventType, payload) {
        const eventData = {
            type: eventType,
            payload,
            timestamp: new Date().toISOString()
        };
        this.events.push(eventData);
        if (window.ADSLATH && window.ADSLATH.modules && window.ADSLATH.modules.eventEngine) {
            window.ADSLATH.modules.eventEngine.emit(eventType, eventData);
        }
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.trackingEngine = new TrackingEngine();
}
