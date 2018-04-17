import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ClassNames from 'classnames';

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
			<div
				className={ClassNames([
					'Block',
					this.props.className,
				])}
			>
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
	className: PropTypes.string,
};

Block.defaultProps = {
	children: null,
};