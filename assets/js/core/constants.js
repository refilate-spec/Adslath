/**
 * @file constants.js
 * @description Centralized immutable system constants for Adslath.
 */

export const CONSTANTS = Object.freeze({
    NAMESPACE: 'ADSLATH',
    VERSION: '1.0.0',
    STORAGE_KEYS: {
        CONFIG: 'adslath_config_v1',
        STATE: 'adslath_state_v1',
        CACHE: 'adslath_cache_v1'
    },
    LOG_LEVELS: {
        DEBUG: 0,
        INFO: 1,
        WARNING: 2,
        ERROR: 3
    },
    DEFAULT_STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive'
    },
    ROTATION_POLICIES: {
        WEIGHTED_RANDOM: 'weighted-random',
        ROUND_ROBIN: 'round-robin',
        PRIORITY_BASED: 'priority-based'
    }
});
