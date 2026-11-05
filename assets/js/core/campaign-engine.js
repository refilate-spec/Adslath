/**
 * @file campaign-engine.js
 * @description Campaign schedule validation and active window checking.
 */

export class CampaignEngine {
    static isCampaignActive(campaignId, schedules = []) {
        if (!campaignId) return true; // Ads without campaigns are always eligible by default
        const schedule = schedules.find(s => s.campaignId === campaignId);
        if (!schedule) return true;

        if (schedule.campaignStatus !== 'active') return false;

        const now = new Date();
        const startDate = new Date(schedule.startDate);
        const endDate = new Date(schedule.endDate);

        if (now < startDate || now > endDate) return false;

        const currentDay = now.getDay();
        if (Array.isArray(schedule.activeDays) && !schedule.activeDays.includes(currentDay)) {
            return false;
        }

        return true;
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.campaignEngine = CampaignEngine;
}
