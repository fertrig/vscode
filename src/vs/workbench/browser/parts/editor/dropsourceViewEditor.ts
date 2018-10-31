'use strict';

import { BaseEditor } from 'vs/workbench/browser/parts/editor/baseEditor';
import { ITelemetryService } from 'vs/platform/telemetry/common/telemetry';
import { IThemeService } from 'vs/platform/theme/common/themeService';
import { EditorInput, EditorOptions } from 'vs/workbench/common/editor';
import { CancellationToken } from 'vs/base/common/cancellation';
import { Dimension } from 'vs/base/browser/dom';

// import { $ } from 'vs/base/browser/dom';

export abstract class BaseDropsourceViewEditor extends BaseEditor {

	private containerElement: HTMLElement;

	constructor(
		id: string,
		telemetryService: ITelemetryService,
		themeService: IThemeService,
	) {
		super(id, telemetryService, themeService);
	}

	getTitle(): string {
		return this.input ? this.input.getName() : 'Dropsource View Editor';
	}

	protected createEditor(parent: HTMLElement): void {
		this.containerElement = document.createElement('div');
		this.containerElement.className = 'dropsource-view-container';

		const header = document.createElement('div');
		header.innerText = 'Dropsource Foo Container';

		this.containerElement.appendChild(header);
		parent.appendChild(this.containerElement);
	}

	setInput(input: EditorInput, options: EditorOptions, token: CancellationToken): Thenable<void> {
		return super.setInput(input, options, token).then(() => {
			return input.resolve().then(model => {

				// Check for cancellation
				if (token.isCancellationRequested) {
					return void 0;
				}

				return void 0;
			});
		});
	}

	clearInput(): void {
		// @TODO: empty the contents of the container here
		super.clearInput();
	}

	layout(dimension: Dimension): void {
		this.containerElement.style.width = dimension.width + 'px';
		this.containerElement.style.height = dimension.height + 'px';
	}

	focus(): void {
		this.containerElement.focus();
	}

	dispose(): void {
		// @TODO: may need a more sophisticated way to dispose of all the children
		this.containerElement = null;
	}

	getContainer(): HTMLElement {
		return this.containerElement;
	}
}