/**
 * @file schedule-data.js
 * @description Campaign schedule structures and date/time configurations.
 */

import { ADSLATH } from '../core/namespace.js';

export const SCHEDULE_DATA = Object.freeze({
    schedules: [
        { campaignId: "campaign-001", startDate: "2026-01-01", endDate: "2026-12-31", startTime: "00:00", endTime: "23:59", activeDays: [1, 2, 3, 4, 5, 6, 0], timezone: "UTC", campaignStatus: "active" },
        { campaignId: "campaign-002", startDate: "2026-01-05", endDate: "2026-12-31", startTime: "08:00", endTime: "20:00", activeDays: [1, 2, 3, 4, 5], timezone: "UTC", campaignStatus: "active" },
        { campaignId: "campaign-003", startDate: "2026-02-01", endDate: "2026-06-30", startTime: "00:00", endTime: "23:59", activeDays: [6, 0], timezone: "UTC", campaignStatus: "active" }
    ]
});

if (window.ADSLATH) {
    window.ADSLATH.data.schedules = SCHEDULE_DATA.schedules;
}
