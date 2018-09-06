'use strict';

import { BaseDropsourceViewEditor } from 'vs/workbench/browser/parts/editor/dropsourceViewEditor';
import { DROPSOURCE_VIEW_FILE_EDITOR_ID } from 'vs/workbench/parts/files/common/files';
import { ITelemetryService } from 'vs/platform/telemetry/common/telemetry';
import { IThemeService } from 'vs/platform/theme/common/themeService';

export class DropsourceViewFileEditor extends BaseDropsourceViewEditor {
	static readonly ID = DROPSOURCE_VIEW_FILE_EDITOR_ID;

	constructor(
		@ITelemetryService telemetryService: ITelemetryService,
		@IThemeService themeService: IThemeService,
	) {
		super(
			DropsourceViewFileEditor.ID,
			telemetryService,
			themeService
		);
	}

	getTitle(): string {
		return this.input ? this.input.getName() : 'Dropsource View File Editor';
	}
}