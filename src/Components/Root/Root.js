import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Block from '../Helpers/Block/Block.js';
import SectionSeparator from '../Helpers/SectionSeparator/SectionSeparator.js';

import Cover from './Cover/Cover.js';
import Main from './Main/Main.js';
import Information from './Information/Information.js';
import Resume from './Resume/Resume.js';
import TimeLine from './TimeLine/TimeLine.js';
import TechnicalSkills from './TechnicalSkills/TechnicalSkills.js';
import LanguageSkills from './LanguageSkills/LanguageSkills.js';
import ExtraCurricularActivities from './ExtraCurricularActivities/ExtraCurricularActivities.js';

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

		/** TechnicalSkills **/

		const technicalSkillsSeparator = (
			<SectionSeparator>
				Technical skills
			</SectionSeparator>
		);

		const technicalSkills = (
			<Block>
				<TechnicalSkills
					technicalSkills={this.props.configuration.data.technicalSkills}
				/>
			</Block>
		);

		/** LanguageSkills **/

		const languageSkillsSeparator = (
			<SectionSeparator>
				Language skills
			</SectionSeparator>
		);

		const languageSkills = (
			<Block>
				<LanguageSkills
					languageSkills={this.props.configuration.data.languageSkills}
				/>
			</Block>
		);

		/** ExtraCurricularActivities **/

		const extraCurricularActivitiesSeparator = (
			<SectionSeparator>
				Extra-curricular activities
			</SectionSeparator>
		);

		const extraCurricularActivities = (
			<Block>
				<ExtraCurricularActivities
					extraCurricularActivities={this.props.configuration.data.extraCurricularActivities}
				/>
			</Block>
		);

		/** Main **/

		const main = (
			<Main>
				{information}
				{resumeSeparator}
				{resume}
				{timeLineSeparator}
				{timeLine}
				{technicalSkillsSeparator}
				{technicalSkills}
				{languageSkillsSeparator}
				{languageSkills}
				{extraCurricularActivitiesSeparator}
				{extraCurricularActivities}
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