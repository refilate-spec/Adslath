/**
 * @file dom-utils.js
 * @description Safe DOM element creation and manipulation helpers.
 */
export class DomUtils {
    static createElement(tag, className = '', attributes = {}) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        for (const [key, val] of Object.entries(attributes)) {
            el.setAttribute(key, val);
        }
        return el;
    }

    static removeElement(el) {
        if (el && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
}
