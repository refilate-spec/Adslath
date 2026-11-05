/**
 * @file placements-manager.js
 * @description Dashboard manager for reusable placement configurations.
 */
import { PLACEMENT_DATA } from '../data/placement-data.js';

export class PlacementsManager {
    static render(container) {
        const placements = PLACEMENT_DATA.placements;
        container.innerHTML = `
            <h2>Placement Configurations Management</h2>
            <div class="dash-card" style="margin-top: 1.5rem;">
                <p style="color: var(--dash-text-muted); margin-bottom: 1rem;">Viewing reusable placement rules and dimensions.</p>
                <table class="dash-table">
                    <thead>
                        <tr>
                            <th>Placement ID</th>
                            <th>Type</th>
                            <th>Preferred Styles</th>
                            <th>Allowed Categories</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${placements.map(p => `
                            <tr>
                                <td><strong>${p.id}</strong></td>
                                <td><span class="dash-badge">${p.placementType}</span></td>
                                <td>${p.preferredStyles.join(', ')}</td>
                                <td>${p.allowedCategories.length ? p.allowedCategories.join(', ') : 'All (Unrestricted)'}</td>
                                <td><span class="dash-badge">${p.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
