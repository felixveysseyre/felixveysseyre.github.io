import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Button from '../../Forms/Button/Button.js';

import './Resume.less';

export default class Resume extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

	}

	render() {

		/* Summary */

		const summary = (
			<div>
				{
					this.props.resume.map((resume, index) => {
						return (
							<p key={index}>
								{resume}
							</p>
						);
					})
				}
			</div>
		);

		/* Actions */

		let actions = null;

		if(this.props.resumeFilePath)
		{
			actions = (
				<div className="actions">
					<Button
						className="orange"
						action={() => {
							window.open(this.props.resumeFilePath);
						}}
					>
						Download resume
					</Button>
				</div>
			);
		}

		/* Element */

		const element = (
			<div className="Resume">
				{summary}
				{actions}
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

Resume.propTypes = {
	resumeFilePath: PropTypes.string,

	resume: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
	]).isRequired,
};

Resume.defaultProps = {
	resumeFilePath: null,
};