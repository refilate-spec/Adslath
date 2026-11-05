/**
 * @file card-style-engine.js
 * @description Resolves card presentation styles against registry and permissions.
 */
import { CARD_STYLES } from '../data/card-styles.js';

export class CardStyleEngine {
    static resolveStyleClass(styleId) {
        const style = CARD_STYLES.styles.find(s => s.id === styleId);
        return style ? style.cssClass : 'adslath-card-compact';
    }
}
