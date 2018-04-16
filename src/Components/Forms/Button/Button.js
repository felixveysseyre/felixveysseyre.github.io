import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './Button.less';

export default class Button extends Component {

	/* Generic */

	constructor(props) {
		super(props);
	}

	render() {

		/* Element */

		const element = (
			<div className="Button">
				<button
					className={this.props.className}
					disabled={this.props.disabled}
					onClick={() => {
						this.onClickAction();
					}}
				>
					<span>
						{this.props.children}
					</span>
				</button>
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

	onClickAction() {
		if(this.props.action)
		{
			this.props.action();
		}
	}
};

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	disabled: PropTypes.bool,
	action: PropTypes.func,
};

Button.defaultProps = {
	className: '',
	children: '',
	disabled: false,
	action: null,
};