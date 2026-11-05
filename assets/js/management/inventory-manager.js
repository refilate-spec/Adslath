/**
 * @file inventory-manager.js
 * @description Local CRUD operations for advertisement inventory.
 */
import { StorageEngine } from '../core/storage-engine.js';
import { ADSLATH_DATA } from '../data/ads-data.js';

export class InventoryManager {
    static getAds() {
        const stored = StorageEngine.get('adslath_inventory_ads_v1');
        return stored || ADSLATH_DATA.ads;
    }

    static saveAds(ads) {
        StorageEngine.set('adslath_inventory_ads_v1', ads);
    }

    static addAd(newAd) {
        const ads = InventoryManager.getAds();
        ads.push(newAd);
        InventoryManager.saveAds(ads);
    }

    static deleteAd(adId) {
        let ads = InventoryManager.getAds();
        ads = ads.filter(a => a.id !== adId);
        InventoryManager.saveAds(ads);
    }
}
