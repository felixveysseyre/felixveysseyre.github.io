import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './SectionSeparator.less';

export default class SectionSeparator extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

	}

	render() {

		/* Element */

		const element = (
			<div className="SectionSeparator">
				{this.props.children}
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

SectionSeparator.propTypes = {
	children: PropTypes.node,
};

SectionSeparator.defaultProps = {
	children: null,
};