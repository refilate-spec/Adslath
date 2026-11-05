/**
 * @file overview-page.js
 * @description Overview dashboard page rendering stats and metrics.
 */
import { InventoryManager } from '../management/inventory-manager.js';
import { DomainManager } from '../management/domain-manager.js';
import { CampaignManager } from '../management/campaign-manager.js';
import { PerformanceEngine } from '../analytics/performance-engine.js';

export class OverviewPage {
    static render(container) {
        const ads = InventoryManager.getAds();
        const domains = DomainManager.getDomains();
        const campaigns = CampaignManager.getCampaigns();
        const metrics = PerformanceEngine.getMetrics();

        container.innerHTML = `
            <h2>System Overview</h2>
            <div class="dash-stats-grid">
                <div class="dash-card dash-stat-item">
                    <h4>Total Advertisements</h4>
                    <div class="value">${ads.length}</div>
                </div>
                <div class="dash-card dash-stat-item">
                    <h4>Registered Domains</h4>
                    <div class="value">${domains.length}</div>
                </div>
                <div class="dash-card dash-stat-item">
                    <h4>Active Campaigns</h4>
                    <div class="value">${campaigns.filter(c => c.campaignStatus === 'active').length}</div>
                </div>
                <div class="dash-card dash-stat-item">
                    <h4>Recorded Impressions (Local)</h4>
                    <div class="value">${metrics.impressions}</div>
                </div>
                <div class="dash-card dash-stat-item">
                    <h4>Recorded Clicks (Local)</h4>
                    <div class="value">${metrics.clicks}</div>
                </div>
                <div class="dash-card dash-stat-item">
                    <h4>Local CTR</h4>
                    <div class="value">${metrics.ctr}</div>
                </div>
            </div>
            <div class="dash-card" style="margin-top: 2rem;">
                <h3>Scope Notice</h3>
                <p style="color: var(--dash-text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
                    All metrics displayed above represent <strong>local browser analytics</strong> collected from the current client session. Adslath operates statelessly without a central backend database.
                </p>
            </div>
        `;
    }
}
