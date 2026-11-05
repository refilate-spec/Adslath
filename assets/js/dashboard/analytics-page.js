/**
 * @file analytics-page.js
 * @description Analytics performance dashboard page.
 */
import { PerformanceEngine } from '../analytics/performance-engine.js';
import { EventCollector } from '../analytics/event-collector.js';

export class AnalyticsPage {
    static render(container) {
        const metrics = PerformanceEngine.getMetrics();
        const events = EventCollector.getEvents();

        container.innerHTML = `
            <h2>Analytics & Performance</h2>
            <div class="dash-stats-grid" style="margin-top: 1.5rem;">
                <div class="dash-card dash-stat-item">
                    <h4>Total Impressions</h4>
                    <div class="value">${metrics.impressions}</div>
                </div>
                <div class="dash-card dash-stat-item">
                    <h4>Total Clicks</h4>
                    <div class="value">${metrics.clicks}</div>
                </div>
                <div class="dash-card dash-stat-item">
                    <h4>Click-Through Rate (CTR)</h4>
                    <div class="value">${metrics.ctr}</div>
                </div>
            </div>
            <div class="dash-card" style="margin-top: 2rem;">
                <h3>Recent Local Event Log</h3>
                <table class="dash-table">
                    <thead>
                        <tr>
                            <th>Event Type</th>
                            <th>Ad ID</th>
                            <th>Placement ID</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${events.slice(0, 10).map(e => `
                            <tr>
                                <td><span class="dash-badge">${e.type}</span></td>
                                <td>${e.adId || 'N/A'}</td>
                                <td>${e.placementId || 'N/A'}</td>
                                <td>${new Date(e.timestamp).toLocaleString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
