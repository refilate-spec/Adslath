/**
 * @file campaign-manager.js
 * @description Local CRUD operations for campaigns.
 */
import { StorageEngine } from '../core/storage-engine.js';
import { SCHEDULE_DATA } from '../data/schedule-data.js';

export class CampaignManager {
    static getCampaigns() {
        return StorageEngine.get('adslath_campaigns_v1') || SCHEDULE_DATA.schedules;
    }

    static saveCampaigns(campaigns) {
        StorageEngine.set('adslath_campaigns_v1', campaigns);
    }
}
