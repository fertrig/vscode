'use strict';

import { BaseDropsourceViewEditor } from 'vs/workbench/browser/parts/editor/dropsourceViewEditor';
import { DROPSOURCE_VIEW_FILE_EDITOR_ID } from 'vs/workbench/parts/files/common/files';
import { ITelemetryService } from 'vs/platform/telemetry/common/telemetry';
import { IThemeService } from 'vs/platform/theme/common/themeService';
import { EditorInput, EditorOptions } from 'vs/workbench/common/editor';
import { CancellationToken } from 'vs/base/common/cancellation';
import { ITextFileEditorModel } from 'vs/workbench/services/textfile/common/textfiles';


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

	setInput(input: EditorInput, options: EditorOptions, token: CancellationToken): Thenable<void> {
		return super.setInput(input, options, token).then(() => {
			return input.resolve().then(resolvedModel => {

				// Check for cancellation
				if (token.isCancellationRequested) {
					return void 0;
				}

				const textFileModel = <ITextFileEditorModel>resolvedModel;
				const container = this.getContainer();

				const fileContent = document.createElement('div');
				fileContent.innerText = textFileModel.getVersionId().toString();
				fileContent.innerText = textFileModel.textEditorModel.getValue();

				container.appendChild(fileContent);

				return void 0;
			});
		});
	}
}