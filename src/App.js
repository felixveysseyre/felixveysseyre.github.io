import React from 'react';
import {render} from 'react-dom';
import ReactGA from 'react-ga';

import Root from './Components/Root/Root.js';

export class App {

	constructor(containerId, configuration) {

		/* Configuration */

		const defaultConfiguration = {
			dateFormat: 'YYYY-MM-DD',
			googleAnalyticsId: null,
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

		/* Analytics */

		if(configuration.googleAnalyticsId)
		{
			ReactGA.initialize(configuration.googleAnalyticsId);
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
	}
}