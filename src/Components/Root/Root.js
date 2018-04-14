import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './Root.less';

export default class Root extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

	}

	render() {

		/* Element */

		const element = (
			<div className="Root">
				Hello
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

Root.propTypes = {
	configuration: PropTypes.object.isRequired,
};

Root.defaultProps = {
};