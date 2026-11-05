/**
 * @file data-utils.js
 * @description Safe data lookup, cloning, and normalization helpers.
 */

export class DataUtils {
    static findById(collection, id) {
        if (!Array.isArray(collection)) return null;
        return collection.find(item => item.id === id) || null;
    }

    static findByCategory(collection, categorySlug) {
        if (!Array.isArray(collection)) return [];
        return collection.filter(item => 
            Array.isArray(item.categories) && item.categories.includes(categorySlug)
        );
    }

    static cloneDeep(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        try {
            return structuredClone(obj);
        } catch {
            return JSON.parse(JSON.stringify(obj));
        }
    }

    static hasDuplicates(collection, key = 'id') {
        if (!Array.isArray(collection)) return false;
        const seen = new Set();
        for (const item of collection) {
            const val = item[key];
            if (seen.has(val)) return true;
            seen.add(val);
        }
        return false;
    }
}
