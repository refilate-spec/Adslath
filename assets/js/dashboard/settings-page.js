/**
 * @file settings-page.js
 * @description Settings and backup management page.
 */
import { ExportEngine } from '../management/export-engine.js';

export class SettingsPage {
    static render(container) {
        container.innerHTML = `
            <h2>System Settings & Backup</h2>
            <div class="dash-card" style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                <h3>System Backup</h3>
                <p style="color: var(--dash-text-muted);">Download a full configuration backup including ads, domains, and campaigns.</p>
                <button id="backup-btn" class="dash-btn" style="width: fit-content;">Download Full Backup</button>
            </div>
        `;

        document.getElementById('backup-btn')?.addEventListener('click', () => {
            ExportEngine.exportAll();
        });
    }
}
