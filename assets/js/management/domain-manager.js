/**
 * @file domain-manager.js
 * @description Local domain registry management.
 */
import { StorageEngine } from '../core/storage-engine.js';
import { DOMAINS_DATA } from '../data/domains-data.js';

export class DomainManager {
    static getDomains() {
        return StorageEngine.get('adslath_domains_v1') || DOMAINS_DATA.domains;
    }

    static saveDomains(domains) {
        StorageEngine.set('adslath_domains_v1', domains);
    }
}
