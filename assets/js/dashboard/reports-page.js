/**
 * @file reports-page.js
 * @description Reports export page.
 */
import { ReportEngine } from '../analytics/report-engine.js';

export class ReportsPage {
    static render(container) {
        container.innerHTML = `
            <h2>Reports & Data Export</h2>
            <div class="dash-card" style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                <h3>Export Local Analytics Report</h3>
                <p style="color: var(--dash-text-muted);">Download a complete JSON report of all recorded local view and click events.</p>
                <button id="export-json-btn" class="dash-btn" style="width: fit-content;">Export JSON Report</button>
            </div>
        `;

        document.getElementById('export-json-btn')?.addEventListener('click', () => {
            ReportEngine.exportJSON();
        });
    }
}
