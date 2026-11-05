/**
 * @file validation.js
 * @description Reusable robust validation utilities for records, domains, and URLs.
 */

import { UrlUtils } from './url-utils.js';

export class ValidationUtils {
    static isValidId(id) {
        return typeof id === 'string' && id.trim().length > 0;
    }

    static isValidHostname(hostname) {
        if (typeof hostname !== 'string' || hostname.trim() === '') return false;
        const hostnameRegex = /^([a-zA-Z0-9][-a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$\vert{}^localhost$/;
        return hostnameRegex.test(hostname.trim());
    }

    static validateAdvertisement(ad) {
        if (!ad || typeof ad !== 'object') return { valid: false, error: 'Not an object' };
        if (!ValidationUtils.isValidId(ad.id)) return { valid: false, error: 'Invalid or missing ad ID' };
        if (typeof ad.title !== 'string' || ad.title.trim() === '') return { valid: false, error: 'Missing title' };
        if (!UrlUtils.isValidTargetUrl(ad.targetUrl)) return { valid: false, error: 'Invalid target URL' };
        if (!UrlUtils.isValidImageUrl(ad.image)) return { valid: false, error: 'Invalid image URL' };
        if (!Array.isArray(ad.categories) || ad.categories.length === 0) return { valid: false, error: 'Categories must be a non-empty array' };
        return { valid: true, error: null };
    }

    static validateAdvertisementList(ads) {
        if (!Array.isArray(ads)) return { validCount: 0, invalidCount: 0, errors: ['Not an array'] };
        let validCount = 0;
        let invalidCount = 0;
        const errors = [];
        const seenIds = new Set();

        ads.forEach((ad, index) => {
            const res = ValidationUtils.validateAdvertisement(ad);
            if (!res.valid) {
                invalidCount++;
                errors.push(`Index ${index}: ${res.error}`);
            } else if (seenIds.has(ad.id)) {
                invalidCount++;
                errors.push(`Index ${index}: Duplicate ID ${ad.id}`);
            } else {
                seenIds.add(ad.id);
                validCount++;
            }
        });
        return { validCount, invalidCount, errors };
    }

    static validateDomain(domain) {
        if (!domain || typeof domain !== 'object') return { valid: false, error: 'Not an object' };
        if (!ValidationUtils.isValidId(domain.id)) return { valid: false, error: 'Invalid domain ID' };
        if (!ValidationUtils.isValidHostname(domain.hostname)) return { valid: false, error: 'Invalid hostname format' };
        return { valid: true, error: null };
    }

    static validateDomainList(domains) {
        if (!Array.isArray(domains)) return { validCount: 0, invalidCount: 0, errors: ['Not an array'] };
        let validCount = 0;
        let invalidCount = 0;
        const errors = [];
        const seenHostnames = new Set();

        domains.forEach((dom, index) => {
            const res = ValidationUtils.validateDomain(dom);
            if (!res.valid) {
                invalidCount++;
                errors.push(`Index ${index}: ${res.error}`);
            } else if (seenHostnames.has(dom.hostname)) {
                invalidCount++;
                errors.push(`Index ${index}: Duplicate hostname ${dom.hostname}`);
            } else {
                seenHostnames.add(dom.hostname);
                validCount++;
            }
        });
        return { validCount, invalidCount, errors };
    }
}
