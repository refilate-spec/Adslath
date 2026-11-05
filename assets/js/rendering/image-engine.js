/**
 * @file image-engine.js
 * @description Robust image loading, error handling, and lazy loading configuration.
 */
import { DomUtils } from '../utils/dom-utils.js';
import { SafeRender } from '../utils/safe-render.js';

export class ImageEngine {
    static createImageElement(imageUrl, altText) {
        const container = DomUtils.createElement('div', 'adslath-card-image-container');
        const img = DomUtils.createElement('img', 'adslath-card-image', {
            src: SafeRender.sanitizeUrl(imageUrl),
            alt: SafeRender.sanitizeText(altText || 'Advertisement'),
            loading: 'lazy'
        });

        img.onerror = function () {
            container.style.display = 'none'; // Hide broken image container cleanly
        };

        container.appendChild(img);
        return container;
    }
}
