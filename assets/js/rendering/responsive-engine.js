/**
 * @file responsive-engine.js
 * @description Ensures responsive adaptation across screen sizes.
 */
export class ResponsiveEngine {
    static applyResponsiveConfig(wrapperEl, config) {
        if (!wrapperEl) return;
        if (config.theme) {
            wrapperEl.classList.add(`adslath-theme-${config.theme}`);
        }
    }
}
