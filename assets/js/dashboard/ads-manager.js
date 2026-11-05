/**
 * @file ads-manager.js
 * @description Advertisement inventory manager UI.
 */
import { InventoryManager } from '../management/inventory-manager.js';

export class AdsManager {
    static render(container) {
        const ads = InventoryManager.getAds();
        container.innerHTML = `
            <h2>Advertisement Inventory Management</h2>
            <div class="dash-card" style="margin-top: 1.5rem;">
                <table class="dash-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Categories</th>
                            <th>Weight</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${ads.map(ad => `
                            <tr>
                                <td>${ad.id}</td>
                                <td>${ad.title}</td>
                                <td>${ad.categories.join(', ')}</td>
                                <td>${ad.weight}</td>
                                <td><span class="dash-badge">${ad.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
