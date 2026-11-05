/**
 * @file dashboard-state.js
 * @description Manages active dashboard navigation and filters.
 */
export class DashboardState {
    static getActiveRoute() {
        const hash = window.location.hash.replace('#', '');
        return hash || 'overview';
    }
}
