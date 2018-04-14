import React from 'react';
import {render} from 'react-dom';

import Root from './Components/Root/Root.js';

export class App {

	constructor(containerId, configuration) {

		/* Configuration */

		const defaultConfiguration = {
		};

		configuration = Object.assign({}, defaultConfiguration, configuration);

		/* Create element */

		const element = (
			<Root
				configuration={configuration}
			/>
		);

		/* Render element */

		render(element, document.getElementById(containerId));
	}
}