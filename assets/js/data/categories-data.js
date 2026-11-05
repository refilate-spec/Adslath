/**
 * @file categories-data.js
 * @description Centralized category registry.
 */

import { ADSLATH } from '../core/namespace.js';

export const CATEGORIES_DATA = Object.freeze({
    categories: [
        { id: "cat-001", name: "Gaming", slug: "gaming", parentCategory: null, childCategories: [], relatedCategories: ["entertainment", "technology"], associatedTags: ["games", "hardware", "pc"], status: "active" },
        { id: "cat-002", name: "Technology", slug: "technology", parentCategory: null, childCategories: ["software", "hardware"], relatedCategories: ["development", "artificial-intelligence"], associatedTags: ["tech", "gadgets"], status: "active" },
        { id: "cat-003", name: "Shopping", slug: "shopping", parentCategory: null, childCategories: [], relatedCategories: ["lifestyle", "fashion"], associatedTags: ["deals", "store"], status: "active" },
        { id: "cat-004", name: "Fashion", slug: "fashion", parentCategory: null, childCategories: [], relatedCategories: ["lifestyle", "shopping"], associatedTags: ["apparel", "style"], status: "active" },
        { id: "cat-005", name: "Education", slug: "education", parentCategory: null, childCategories: [], relatedCategories: ["productivity", "development"], associatedTags: ["learning", "courses"], status: "active" },
        { id: "cat-006", name: "Entertainment", slug: "entertainment", parentCategory: null, childCategories: [], relatedCategories: ["gaming"], associatedTags: ["media", "movies"], status: "active" },
        { id: "cat-007", name: "Software", slug: "software", parentCategory: "technology", childCategories: ["applications"], relatedCategories: ["development"], associatedTags: ["apps", "tools"], status: "active" },
        { id: "cat-008", name: "Applications", slug: "applications", parentCategory: "software", childCategories: [], relatedCategories: ["productivity"], associatedTags: ["mobile", "desktop"], status: "active" },
        { id: "cat-009", name: "Artificial Intelligence", slug: "artificial-intelligence", parentCategory: "technology", childCategories: [], relatedCategories: ["development", "software"], associatedTags: ["ai", "machine-learning"], status: "active" },
        { id: "cat-010", name: "Finance", slug: "finance", parentCategory: null, childCategories: ["crypto"], relatedCategories: ["business"], associatedTags: ["money", "banking"], status: "active" },
        { id: "cat-011", name: "Crypto", slug: "crypto", parentCategory: "finance", childCategories: [], relatedCategories: ["finance"], associatedTags: ["bitcoin", "blockchain", "tokens"], status: "active" },
        { id: "cat-012", name: "Business", slug: "business", parentCategory: null, childCategories: [], relatedCategories: ["finance", "productivity"], associatedTags: ["enterprise", "startup"], status: "active" },
        { id: "cat-013", name: "Hosting", slug: "hosting", parentCategory: "technology", childCategories: [], relatedCategories: ["development", "security"], associatedTags: ["cloud", "servers", "vps"], status: "active" },
        { id: "cat-014", name: "Digital Products", slug: "digital-products", parentCategory: null, childCategories: [], relatedCategories: ["shopping", "software"], associatedTags: ["downloads", "assets"], status: "active" },
        { id: "cat-015", name: "Lifestyle", slug: "lifestyle", parentCategory: null, childCategories: [], relatedCategories: ["fashion", "health"], associatedTags: ["living", "wellness"], status: "active" },
        { id: "cat-016", name: "Productivity", slug: "productivity", parentCategory: null, childCategories: [], relatedCategories: ["business", "software"], associatedTags: ["workflow", "tools"], status: "active" },
        { id: "cat-017", name: "Development", slug: "development", parentCategory: "technology", childCategories: [], relatedCategories: ["software", "hosting", "security"], associatedTags: ["coding", "programming", "dev"], status: "active" },
        { id: "cat-018", name: "Security", slug: "security", parentCategory: "technology", childCategories: [], relatedCategories: ["development", "hosting"], associatedTags: ["privacy", "encryption", "cybersecurity"], status: "active" },
        { id: "cat-019", name: "Travel", slug: "travel", parentCategory: null, childCategories: [], relatedCategories: ["lifestyle"], associatedTags: ["flights", "hotels"], status: "active" },
        { id: "cat-020", name: "Health", slug: "health", parentCategory: null, childCategories: [], relatedCategories: ["lifestyle"], associatedTags: ["fitness", "wellness"], status: "active" }
    ]
});

if (window.ADSLATH) {
    window.ADSLATH.data.categories = CATEGORIES_DATA.categories;
}
