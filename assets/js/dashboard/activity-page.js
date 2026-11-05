/**
 * @file activity-page.js
 * @description Local activity logs page.
 */
import { EventCollector } from '../analytics/event-collector.js';

export class ActivityPage {
    static render(container) {
        const events = EventCollector.getEvents();
        container.innerHTML = `
            <h2>Activity Logs</h2>
            <div class="dash-card" style="margin-top: 1.5rem;">
                <table class="dash-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Scope</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${events.map(e => `
                            <tr>
                                <td>${e.type}</td>
                                <td>${e.scope}</td>
                                <td>${new Date(e.timestamp).toLocaleString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
