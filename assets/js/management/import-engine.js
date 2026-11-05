/**
 * @file import-engine.js
 * @description Validates and imports JSON configuration backups.
 */
export class ImportEngine {
    static parseImportFile(fileContent) {
        try {
            const parsed = JSON.parse(fileContent);
            if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON structure');
            return { success: true, data: parsed };
        } catch (err) {
            return { success: false, error: err.message };
        }
    }
}
