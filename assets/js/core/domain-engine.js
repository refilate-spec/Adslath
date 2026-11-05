/**
 * @file domain-engine.js
 * @description Hostname normalization, exact/subdomain authorization, and domain configuration lookup.
 */

import { UrlUtils } from '../utils/url-utils.js';

export class DomainEngine {
    static resolveDomain(hostname, domainsList = []) {
        const normalizedHost = hostname.toLowerCase().trim();

        for (const dom of domainsList) {
            if (dom.status !== 'active') continue;
            if (UrlUtils.matchHostname(normalizedHost, dom.hostname, dom.allowSubdomains)) {
                return dom;
            }
        }
        return null;
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.domainEngine = DomainEngine;
}
