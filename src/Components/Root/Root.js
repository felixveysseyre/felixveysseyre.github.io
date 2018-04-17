import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Block from '../Helpers/Block/Block.js';
import SectionSeparator from '../Helpers/SectionSeparator/SectionSeparator.js';

import Cover from './Cover/Cover.js';
import Main from './Main/Main.js';
import Information from './Information/Information.js';
import Resume from './Resume/Resume.js';
import TimeLine from './TimeLine/TimeLine.js';

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
				imageURL={this.props.configuration.data.coverImageURL}
			/>
		);

		/* Main */

		/** Information **/

		const information = (
			<Block>
				<Information
					fullName={this.props.configuration.data.fullName}
					title={this.props.configuration.data.title}
					degree={this.props.configuration.data.degree}
					pictureURL={this.props.configuration.data.pictureURL}
					information={this.props.configuration.data.information}
					networks={this.props.configuration.data.networks}
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
					resume={this.props.configuration.data.resume}
					resumeFilePath={this.props.configuration.data.resumeFilePath}
				/>
			</Block>
		);

		/** TimeLine **/

		const timeLineSeparator = (
			<SectionSeparator>
				Education and experiences
			</SectionSeparator>
		);

		const timeLine = (
			<TimeLine
				timeLine={this.props.configuration.data.timeLine}
				dateFormat={this.props.configuration.dateFormat}
			/>
		);

		/** Main **/

		const main = (
			<Main>
				{information}
				{resumeSeparator}
				{resume}
				{timeLineSeparator}
				{timeLine}
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