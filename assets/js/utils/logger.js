/**
 * @file logger.js
 * @description Configurable logging utility respecting central config debug flags.
 */

import { ADSLATH } from '../core/namespace.js';

export class Logger {
    constructor(moduleName = 'AdslathSystem') {
        this.moduleName = moduleName;
    }

    _isDebugEnabled() {
        return window.ADSLATH && window.ADSLATH.config && window.ADSLATH.config.debugMode === true;
    }

    info(message, ...args) {
        if (this._isDebugEnabled()) {
            console.info(`[Adslath][INFO][${this.moduleName}]`, message, ...args);
        }
    }

    warn(message, ...args) {
        console.warn(`[Adslath][WARN][${this.moduleName}]`, message, ...args);
    }

    error(message, ...args) {
        console.error(`[Adslath][ERROR][${this.moduleName}]`, message, ...args);
    }

    debug(message, ...args) {
        if (this._isDebugEnabled()) {
            console.debug(`[Adslath][DEBUG][${this.moduleName}]`, message, ...args);
        }
    }
}
