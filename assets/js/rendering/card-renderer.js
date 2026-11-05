/**
 * @file card-renderer.js
 * @description Builds the DOM structure for individual advertisement cards.
 */
import { DomUtils } from '../utils/dom-utils.js';
import { SafeRender } from '../utils/safe-render.js';
import { ImageEngine } from './image-engine.js';
import { CardStyleEngine } from './card-style-engine.js';
import { AccessibilityEngine } from './accessibility-engine.js';

export class CardRenderer {
    static renderCard(ad, placementConfig) {
        const styleClass = CardStyleEngine.resolveStyleClass(placementConfig.preferredStyles?.[0]);
        const cardEl = DomUtils.createElement('a', `adslath-card ${styleClass}`, {
            href: SafeRender.sanitizeUrl(ad.targetUrl),
            target: '_blank',
            rel: 'noopener noreferrer sponsored'
        });

        // Disclosure Label
        const labelText = placementConfig.label || 'Sponsored';
        const disclosure = DomUtils.createElement('span', 'adslath-disclosure');
        disclosure.textContent = SafeRender.sanitizeText(labelText);
        cardEl.appendChild(disclosure);

        // Image
        if (ad.image) {
            const imageEl = ImageEngine.createImageElement(ad.image, ad.title);
            cardEl.appendChild(imageEl);
        }

        // Content
        const contentEl = DomUtils.createElement('div', 'adslath-card-content');
        
        const titleEl = DomUtils.createElement('h4', 'adslath-card-title');
        titleEl.textContent = SafeRender.sanitizeText(ad.title);
        contentEl.appendChild(titleEl);

        if (ad.description) {
            const descEl = DomUtils.createElement('p', 'adslath-card-description');
            descEl.textContent = SafeRender.sanitizeText(ad.description);
            contentEl.appendChild(descEl);
        }

        const ctaEl = DomUtils.createElement('span', 'adslath-card-cta');
        ctaEl.textContent = 'Learn More';
        contentEl.appendChild(ctaEl);

        cardEl.appendChild(contentEl);
        AccessibilityEngine.applyAccessibility(cardEl, ad);

        return cardEl;
    }
}
