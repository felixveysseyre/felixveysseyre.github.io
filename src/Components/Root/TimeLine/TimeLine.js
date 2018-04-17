import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Icon from 'react-fa';
import moment from 'moment';

import Block from '../../Helpers/Block/Block.js';

import './TimeLine.less';

export default class TimeLine extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

		this.timeLineTypes = {
			education: 'education',
			experience: 'experience',
		};
	}

	render() {

		/* Functions */

		const generateEducationBlock = (educationTimeLine) => {

			/* Note */

			let note = null;

			if(educationTimeLine.note)
			{
				note = (
					<p className="note">
						{educationTimeLine.note}
					</p>
				);
			}

			/* Return */

			return (
				<Block className="block">
					<p>
						<span className="name">
							{educationTimeLine.name}
						</span>
						<br/>
						<span className="school">
							{educationTimeLine.school}
							<a
								href={educationTimeLine.URL}
								target="_blank"
							>
								<Icon
									name="link"
								/>
							</a>
						</span>
						<br/>
						<span className="location">
							<span>
								{educationTimeLine.location},
							</span>
							<span
								tooltip={[
									this.formatDate(educationTimeLine.start),
									((educationTimeLine.end) ? this.formatDate(educationTimeLine.end) : '?'),
								].join(' - ')}
							>
								{this.getDateYear(educationTimeLine.start)} - {(educationTimeLine.end) ? this.getDateYear(educationTimeLine.end) : '?'}
							</span>
						</span>
					</p>
					<p>
						{educationTimeLine.description}
					</p>
					{note}
				</Block>
			);
		};

		const generateExperienceBlock = (experienceTimeLine) => {

			/* Return */

			return (
				<Block className="block">
					<p>
						<span className="name">
							{experienceTimeLine.name}
						</span>
						<br/>
						<span className="company">
							{experienceTimeLine.company}
							<a
								href={experienceTimeLine.URL}
								target="_blank"
							>
								<Icon
									name="link"
								/>
							</a>
						</span>
						<br/>
						<span className="location">
							<span>
								{experienceTimeLine.location},
							</span>
							<span
								tooltip={[
									this.formatDate(experienceTimeLine.start),
									((experienceTimeLine.end) ? this.formatDate(experienceTimeLine.end) : '?'),
								].join(' - ')}
							>
								{this.getDateYear(experienceTimeLine.start)} - {(experienceTimeLine.end) ? this.getDateYear(experienceTimeLine.end) : '?'}
							</span>
						</span>
					</p>
					<p>
						{experienceTimeLine.description}
					</p>
					<ul>
						{
							experienceTimeLine.projects.map((projectValue, projectIndex) => {
								return (
									<li key={projectIndex}>
										{projectValue}
									</li>
								);
							})
						}
					</ul>
				</Block>
			);
		};

		/* Element */

		const element = (
			<div className="TimeLine">
				<table>
					<tbody>
						{
							this.props.timeLine.map((timeLineValue, timeLineIndex) => {
								let leftColumn = null;
								let rightColumn = null;

								if(timeLineValue.type === this.timeLineTypes.education)
								{
									leftColumn = (
										<td className="left">
											{generateEducationBlock(timeLineValue)}
											<div className="icon">
												<Icon
													name="graduation-cap"
												/>
											</div>
										</td>
									);

									rightColumn = (
										<td className="right"/>
									);
								}
								else if(timeLineValue.type === this.timeLineTypes.experience)
								{
									rightColumn = (
										<td className="right">
											{generateExperienceBlock(timeLineValue)}
											<div className="icon">
												<Icon
													name="institution"
												/>
											</div>
										</td>
									);

									leftColumn = (
										<td className="left"/>
									);
								}

								return (
									<tr key={timeLineIndex}>
										{leftColumn}
										{rightColumn}
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

	formatDate(date, format = this.props.dateFormat) {
		return moment(date).format(format);
	}

	getDateYear(date) {
		return moment(date).format('YYYY');
	}
};

TimeLine.propTypes = {
	dateFormat: PropTypes.string,

	timeLine: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			start: PropTypes.string.isRequired,
			end: PropTypes.string,
			name: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			URL: PropTypes.string,
			school: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			note: PropTypes.string,
		}),
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			start: PropTypes.string.isRequired,
			end: PropTypes.string,
			name: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			URL: PropTypes.string,
			company: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			projects: PropTypes.arrayOf(PropTypes.string).isRequired,
		}),
	])).isRequired,
};

TimeLine.defaultProps = {
	dateFormat: 'YYYY-MM-DD',
};