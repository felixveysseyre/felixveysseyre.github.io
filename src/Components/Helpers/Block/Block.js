import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './Block.less';

export default class Block extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

	}

	render() {

		/* Element */

		const element = (
			<div className="Block">
				{this.props.children}
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

Block.propTypes = {
	children: PropTypes.node,
};

Block.defaultProps = {
	children: null,
};