/**
 * @file backup-engine.js
 * @description Backup generator wrapper.
 */
import { ExportEngine } from './export-engine.js';

export class BackupEngine {
    static createBackup() {
        ExportEngine.exportAll();
    }
}
