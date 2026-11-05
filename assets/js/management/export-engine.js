/**
 * @file export-engine.js
 * @description Exports full system configurations as downloadable JSON.
 */
import { InventoryManager } from './inventory-manager.js';
import { DomainManager } from './domain-manager.js';
import { CampaignManager } from './campaign-manager.js';

export class ExportEngine {
    static exportAll() {
        const exportBundle = {
            version: '1.0.0',
            exportedAt: new Date().toISOString(),
            ads: InventoryManager.getAds(),
            domains: DomainManager.getDomains(),
            campaigns: CampaignManager.getCampaigns()
        };

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportBundle, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", `adslath_full_backup_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
    }
}
