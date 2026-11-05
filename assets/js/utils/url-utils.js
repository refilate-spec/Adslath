/**
 * @file url-utils.js
 * @description URL normalization, protocol validation, and hostname security checks.
 */

export class UrlUtils {
    static normalizeUrl(rawUrl) {
        if (typeof rawUrl !== 'string' || rawUrl.trim() === '') return '';
        try {
            const parsed = new URL(rawUrl.trim());
            return parsed.toString();
        } catch {
            return '';
        }
    }

    static isSecureProtocol(urlStr) {
        if (typeof urlStr !== 'string') return false;
        try {
            const parsed = new URL(urlStr);
            return parsed.protocol === 'https:' || parsed.protocol === 'http:';
        } catch {
            return false;
        }
    }

    static isValidTargetUrl(urlStr) {
        if (!UrlUtils.isSecureProtocol(urlStr)) return false;
        const lower = urlStr.toLowerCase();
        if (lower.startsWith('javascript:') || lower.startsWith('data:') || lower.startsWith('vbscript:')) {
            return false;
        }
        return true;
    }

    static isValidImageUrl(urlStr) {
        return UrlUtils.isValidTargetUrl(urlStr);
    }

    static extractHostname(urlStr) {
        if (typeof urlStr !== 'string') return '';
        try {
            const parsed = new URL(urlStr);
            return parsed.hostname.toLowerCase();
        } catch {
            return '';
        }
    }

    static matchHostname(requestHostname, targetHostname, allowSubdomains = false) {
        const req = requestHostname.toLowerCase().trim();
        const target = targetHostname.toLowerCase().trim();

        if (req === target) return true;
        if (allowSubdomains && req.endsWith('.' + target)) return true;
        return false;
    }
}
