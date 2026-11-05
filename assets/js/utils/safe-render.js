/**
 * @file safe-render.js
 * @description Strict sanitization and safe DOM insertion utilities to prevent XSS.
 */
import { UrlUtils } from './url-utils.js';

export class SafeRender {
    static sanitizeText(text) {
        if (typeof text !== 'string') return '';
        const temp = document.createElement('div');
        temp.textContent = text;
        return temp.textContent;
    }

    static sanitizeUrl(url) {
        if (!UrlUtils.isValidTargetUrl(url)) {
            return '#invalid-url';
        }
        return url;
    }
}
