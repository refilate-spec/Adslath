/**
 * @file category-engine.js
 * @description Multi-category matching engine with tag, parent, and relation resolution.
 */

export class CategoryEngine {
    static matchCategories(adCategories = [], placementCategories = [], domainCategories = []) {
        if (!placementCategories.length && !domainCategories.length) return true;
        
        const targetCats = [...placementCategories, ...domainCategories];
        return adCategories.some(cat => targetCats.includes(cat));
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.categoryEngine = CategoryEngine;
}
