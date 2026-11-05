/**
 * @file dashboard-engine.js
 * @description Main initializer for the Adslath management dashboard.
 */
import { DashboardRouter } from './dashboard-router.js';

export class DashboardEngine {
    static init() {
        const contentContainer = document.getElementById('dashboard-content');
        if (!contentContainer) return;

        DashboardRouter.route(contentContainer);

        window.addEventListener('hashchange', () => {
            DashboardRouter.route(contentContainer);
        });
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.dashboardEngine = DashboardEngine;
}
