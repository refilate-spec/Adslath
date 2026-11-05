/**
 * @file dashboard-router.js
 * @description Lightweight client-side router for the Adslath dashboard.
 */
import { DashboardState } from './dashboard-state.js';
import { OverviewPage } from './overview-page.js';
import { AdsManager } from './ads-manager.js';
import { DomainsManager } from './domains-manager.js';
import { CategoriesManager } from './categories-manager.js';
import { CampaignsManager } from './campaigns-manager.js';
import { PlacementsManager } from './placements-manager.js';
import { StylesManager } from './styles-manager.js';
import { AnalyticsPage } from './analytics-page.js';
import { ReportsPage } from './reports-page.js';
import { ActivityPage } from './activity-page.js';
import { SettingsPage } from './settings-page.js';
import { DiagnosticsPage } from './diagnostics-page.js';

export class DashboardRouter {
    static route(contentContainer) {
        const route = DashboardState.getActiveRoute();
        
        // Update active nav styling
        document.querySelectorAll('.adslath-nav a').forEach(a => {
            if (a.getAttribute('href') === `#${route}`) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });

        switch (route) {
            case 'overview': OverviewPage.render(contentContainer); break;
            case 'ads': AdsManager.render(contentContainer); break;
            case 'domains': DomainsManager.render(contentContainer); break;
            case 'categories': CategoriesManager.render(contentContainer); break;
            case 'campaigns': CampaignsManager.render(contentContainer); break;
            case 'placements': PlacementsManager.render(contentContainer); break;
            case 'styles': StylesManager.render(contentContainer); break;
            case 'analytics': AnalyticsPage.render(contentContainer); break;
            case 'reports': ReportsPage.render(contentContainer); break;
            case 'activity': ActivityPage.render(contentContainer); break;
            case 'diagnostics': DiagnosticsPage.render(contentContainer); break;
            case 'settings': SettingsPage.render(contentContainer); break;
            default: OverviewPage.render(contentContainer); break;
        }
    }
}
