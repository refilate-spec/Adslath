/**
 * @file domains-manager.js
 * @description Domain registry manager UI.
 */
import { DomainManager } from '../management/domain-manager.js';

export class DomainsManager {
    static render(container) {
        const domains = DomainManager.getDomains();
        container.innerHTML = `
            <h2>Domain Registry Management</h2>
            <div class="dash-card" style="margin-top: 1.5rem;">
                <table class="dash-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Hostname</th>
                            <th>Allowed Categories</th>
                            <th>Subdomains</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${domains.map(d => `
                            <tr>
                                <td>${d.id}</td>
                                <td>${d.hostname}</td>
                                <td>${d.allowedCategories.join(', ')}</td>
                                <td>${d.allowSubdomains ? 'Yes' : 'No'}</td>
                                <td><span class="dash-badge">${d.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
