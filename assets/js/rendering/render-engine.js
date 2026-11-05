/**
 * @file render-engine.js
 * @description Coordinates DOM container creation, injection, responsive rules, and fallback handling.
 */
import { DomUtils } from '../utils/dom-utils.js';
import { CardRenderer } from './card-renderer.js';
import { FallbackEngine } from './fallback-engine.js';
import { ResponsiveEngine } from './responsive-engine.js';

export class RenderEngine {
    static renderPlacement(placement, assignment) {
        let targetEl = placement.scriptElement ? placement.scriptElement.nextElementSibling : null;
        
        // If script is inline or no direct target, create a container after script
        if (!targetEl || !targetEl.classList || !targetEl.classList.contains('adslath-widget-wrapper')) {
            targetEl = DomUtils.createElement('div', 'adslath-widget-wrapper');
            if (placement.scriptElement && placement.scriptElement.parentNode) {
                placement.scriptElement.parentNode.insertBefore(targetEl, placement.scriptElement.nextSibling);
            } else {
                document.body.appendChild(targetEl);
            }
        }

        ResponsiveEngine.applyResponsiveConfig(targetEl, placement);

        if (!assignment || !assignment.selectedAd) {
            FallbackEngine.renderEmptyState(targetEl);
            return;
        }

        const cardElement = CardRenderer.renderCard(assignment.selectedAd, placement);
        targetEl.innerHTML = ''; // Clear previous
        targetEl.appendChild(cardElement);
    }
}
