/**
 * @file campaigns-manager.js
 * @description Campaign schedule manager UI.
 */
import { CampaignManager } from '../management/campaign-manager.js';

export class CampaignsManager {
    static render(container) {
        const campaigns = CampaignManager.getCampaigns();
        container.innerHTML = `
            <h2>Campaign Schedule Management</h2>
            <div class="dash-card" style="margin-top: 1.5rem;">
                <table class="dash-table">
                    <thead>
                        <tr>
                            <th>Campaign ID</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Timezone</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${campaigns.map(c => `
                            <tr>
                                <td>${c.campaignId}</td>
                                <td>${c.startDate}</td>
                                <td>${c.endDate}</td>
                                <td>${c.timezone}</td>
                                <td><span class="dash-badge">${c.campaignStatus}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
