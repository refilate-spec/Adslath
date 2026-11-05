/**
 * @file report-engine.js
 * @description Generates CSV and JSON reports from local event data.
 */
import { EventCollector } from './event-collector.js';

export class ReportEngine {
    static exportJSON() {
        const events = EventCollector.getEvents();
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(events, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", `adslath_local_report_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
    }
}
