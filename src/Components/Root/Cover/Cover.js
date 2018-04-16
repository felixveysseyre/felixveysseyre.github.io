import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './Cover.less';

export default class Cover extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

	}

	render() {

		/* Element */

		const element = (
			<div
				className="Cover"
				style={{
					backgroundImage: 'url(' + this.props.imageURL + ')',
				}}
			/>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

Cover.propTypes = {
	imageURL: PropTypes.string,
};

Cover.defaultProps = {
	imageURL: null,
};