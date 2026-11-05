/**
 * @file categories-manager.js
 * @description Dashboard manager for system categories registry.
 */
import { CATEGORIES_DATA } from '../data/categories-data.js';

export class CategoriesManager {
    static render(container) {
        const categories = CATEGORIES_DATA.categories;
        container.innerHTML = `
            <h2>Categories Registry Management</h2>
            <div class="dash-card" style="margin-top: 1.5rem;">
                <p style="color: var(--dash-text-muted); margin-bottom: 1rem;">Viewing all system-registered advertisement categories.</p>
                <table class="dash-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Parent</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${categories.map(c => `
                            <tr>
                                <td>${c.id}</td>
                                <td><strong>${c.name}</strong></td>
                                <td><code>${c.slug}</code></td>
                                <td>${c.parentCategory || 'None (Root)'}</td>
                                <td><span class="dash-badge">${c.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
