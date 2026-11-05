/**
 * @file selection-utils.js
 * @description Weighted random selection algorithms and candidate pool handlers.
 */

export class SelectionUtils {
    static weightedRandomSelect(scoredAds) {
        if (!Array.isArray(scoredAds) || scoredAds.length === 0) return null;

        const validCandidates = scoredAds.filter(item => item.score > 0);
        if (validCandidates.length === 0) {
            // Fallback to absolute random if all scores are 0
            const randomIndex = Math.floor(Math.random() * scoredAds.length);
            return scoredAds[randomIndex].ad;
        }

        const totalWeight = validCandidates.reduce((sum, item) => sum + item.score, 0);
        let randomVal = Math.random() * totalWeight;

        for (const candidate of validCandidates) {
            if (randomVal < candidate.score) {
                return candidate.ad;
            }
            randomVal -= candidate.score;
        }

        return validCandidates[0].ad;
    }
}
