/**
 * @file ad-engine.js
 * @description Central Bot AI decision-making coordinator.
 */

import { ADSLATH } from './namespace.js';
import { InitializationEngine } from './initialization-engine.js';

export class AdEngine {
    static run(dataSources) {
        return InitializationEngine.initializeSystem(dataSources);
    }
}

if (window.ADSLATH) {
    window.ADSLATH.engine = AdEngine;
    window.ADSLATH.modules.adEngine = AdEngine;
}
