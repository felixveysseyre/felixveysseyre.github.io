import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Block from '../Helpers/Block/Block.js';
import SectionSeparator from '../Helpers/SectionSeparator/SectionSeparator.js';

import Cover from './Cover/Cover.js';
import Main from './Main/Main.js';
import Information from './Information/Information.js';
import Resume from './Resume/Resume.js';

import './Root.less';

export default class Root extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

	}

	render() {

		/* Cover */

		const cover = (
			<Cover
				imageURL={this.props.configuration.coverImageURL}
			/>
		);

		/* Main */

		/** Information **/

		const information = (
			<Block>
				<Information
					fullName={this.props.configuration.fullName}
					title={this.props.configuration.title}
					degree={this.props.configuration.degree}
					pictureURL={this.props.configuration.pictureURL}
					information={this.props.configuration.information}
					networks={this.props.configuration.networks}
				/>
			</Block>
		);

		/** Resume */

		const resumeSeparator = (
			<SectionSeparator>
				Resume
			</SectionSeparator>
		);

		const resume = (
			<Block>
				<Resume
					resume={this.props.configuration.resume}
					resumeFilePath={this.props.configuration.resumeFilePath}
				/>
			</Block>
		);

		/** Main **/

		const main = (
			<Main>
				{information}
				{resumeSeparator}
				{resume}
			</Main>
		);

		/* Element */

		const element = (
			<div className="Root">
				{cover}
				{main}
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