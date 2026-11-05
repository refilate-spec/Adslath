/**
 * @file scoring-utils.js
 * @description Pure scoring calculations for advertisements based on category, tags, weight, priority, and history.
 */

export class ScoringUtils {
    static calculateScore(ad, placement, domainConfig, historyState = {}) {
        let score = 0;

        // 1. Category Match Score
        const matchingCategories = ad.categories.filter(cat => 
            placement.allowedCategories.includes(cat) || 
            (domainConfig && domainConfig.allowedCategories.includes(cat))
        );
        score += matchingCategories.length * 25;

        // 2. Priority Score (Priority 1-10)
        const priority = typeof ad.priority === 'number' ? ad.priority : 5;
        score += priority * 5;

        // 3. Weight Score (Weight 1-100)
        const weight = typeof ad.weight === 'number' ? ad.weight : 10;
        score += weight * 0.5;

        // 4. Placement Compatibility Score
        if (placement.preferredStyles && placement.preferredStyles.length > 0) {
            score += 10; // Bonus for structured alignment
        }

        // 5. Diversity / History Penalty
        if (historyState && historyState[ad.id]) {
            const recentCount = historyState[ad.id];
            score -= recentCount * 15; // Penalize recently shown ads to promote diversity
        }

        return Math.max(0, Math.round(score * 100) / 100);
    }
}
