/**
 * @file restore-engine.js
 * @description Restores system state from verified backups.
 */
import { InventoryManager } from './inventory-manager.js';
import { DomainManager } from './domain-manager.js';
import { CampaignManager } from './campaign-manager.js';

export class RestoreEngine {
    static restoreBundle(bundle) {
        if (bundle.ads) InventoryManager.saveAds(bundle.ads);
        if (bundle.domains) DomainManager.saveDomains(bundle.domains);
        if (bundle.campaigns) CampaignManager.saveCampaigns(bundle.campaigns);
        return true;
    }
}
