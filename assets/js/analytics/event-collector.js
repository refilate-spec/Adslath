/**
 * @file event-collector.js
 * @description Bounded local event collector using StorageEngine.
 */
import { StorageEngine } from '../core/storage-engine.js';

export class EventCollector {
    static getEvents() {
        return StorageEngine.get('adslath_analytics_events_v1') || [];
    }

    static recordEvent(type, payload) {
        const events = EventCollector.getEvents();
        const eventEntry = {
            id: `evt-${Math.random().toString(36).substring(2, 9)}`,
            type,
            ...payload,
            timestamp: new Date().toISOString(),
            scope: 'local-browser'
        };

        events.unshift(eventEntry);
        // Keep last 500 events bounded
        if (events.length > 500) events.pop();
        StorageEngine.set('adslath_analytics_events_v1', events);
    }

    static clearEvents() {
        StorageEngine.set('adslath_analytics_events_v1', []);
    }
}
