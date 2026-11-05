/**
 * @file configuration-manager.js
 * @description System configuration storage wrapper.
 */
import { StorageEngine } from '../core/storage-engine.js';
import { ADSLATH_CONFIG } from '../core/adslath-config.js';

export class ConfigurationManager {
    static getConfig() {
        return StorageEngine.get('adslath_system_config_v1') || ADSLATH_CONFIG;
    }

    static saveConfig(config) {
        StorageEngine.set('adslath_system_config_v1', config);
    }
}
