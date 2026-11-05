/**
 * @file rotation-engine.js
 * @description Page-load-only rotation enforcement ensuring zero mid-page automatic timers or refreshes.
 */

export class RotationEngine {
    constructor() {
        this.isLocked = false;
    }

    lockPageSession() {
        this.isLocked = true;
    }

    isSessionLocked() {
        return this.isLocked;
    }
}

if (window.ADSLATH) {
    window.ADSLATH.modules.rotationEngine = new RotationEngine();
}
