import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './Main.less';

export default class Main extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

	}

	render() {

		/* Element */

		const element = (
			<div className="Main">
				{this.props.children}
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

Main.propTypes = {
	children: PropTypes.node,
};

Main.defaultProps = {
	children: null,
};