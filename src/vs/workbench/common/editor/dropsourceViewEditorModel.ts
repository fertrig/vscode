'use strict';

import { EditorModel } from 'vs/workbench/common/editor';
import URI from 'vs/base/common/uri';
import { TPromise } from 'vs/base/common/winjs.base';

export class DropsourceViewEditorModel extends EditorModel {

	private name: string;
	private resource: URI;

	constructor(
		resource: URI,
		name: string,
	) {
		super();

		this.resource = resource;
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	getResource(): URI {
		return this.resource;
	}

	load(): TPromise<EditorModel> {
		// QUESTION: do we have to resolve file to get file stats? see binaryEditorModel.load

		return TPromise.wrap(this);
	}
}