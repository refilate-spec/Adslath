/**
 * @file styles-manager.js
 * @description Dashboard manager for presentation card styles.
 */
import { CARD_STYLES } from '../data/card-styles.js';

export class StylesManager {
    static render(container) {
        const styles = CARD_STYLES.styles;
        container.innerHTML = `
            <h2>Card Styles Registry Management</h2>
            <div class="dash-card" style="margin-top: 1.5rem;">
                <p style="color: var(--dash-text-muted); margin-bottom: 1rem;">Viewing available card presentation designs and layouts.</p>
                <table class="dash-table">
                    <thead>
                        <tr>
                            <th>Style ID</th>
                            <th>Display Name</th>
                            <th>Layout Type</th>
                            <th>CSS Class</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${styles.map(s => `
                            <tr>
                                <td><strong>${s.id}</strong></td>
                                <td>${s.displayName}</td>
                                <td>${s.layoutType}</td>
                                <td><code>${s.cssClass}</code></td>
                                <td><span class="dash-badge">${s.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
