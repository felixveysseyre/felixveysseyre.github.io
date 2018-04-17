import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Button from '../../Forms/Button/Button.js';

import './TechnicalSkills.less';

export default class TechnicalSkills extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

		this.state = {
			nextSkillDisplayStatus: false,
		};
	}

	render() {

		/* Summary */

		const summary = (
			<table>
				<tbody>
					{
						this.props.technicalSkills.map((technicalSkill, index) => {
							if(technicalSkill.skills.current.length || (this.state.nextSkillDisplayStatus && technicalSkill.skills.next.length))
							{

								/* Current skills */

								const currentSkills = technicalSkill.skills.current.map((skillValue, skillIndex) => {
									return (
										<li
											key={skillIndex}
											className="current"
										>
											{skillValue}
										</li>
									);
								});

								/* Next skills */

								let nextSkills = null;

								if(this.state.nextSkillDisplayStatus)
								{
									nextSkills = technicalSkill.skills.next.map((skillValue, skillIndex) => {
										return (
											<li
												key={skillIndex}
												className="next"
											>
												{skillValue}
											</li>
										);
									});
								}

								/* Return */

								return (
									<tr key={index}>
										<td className="label">
											{technicalSkill.name}
										</td>
										<td className="list">
											<ul>
												{currentSkills}
												{nextSkills}
											</ul>
										</td>
									</tr>
								);
							}
							else
							{
								return null;
							}
						})
					}
				</tbody>
			</table>
		);

		/* Actions */

		let actions = (
			<div className="actions">
				<Button
					className="orange"
					action={() => {
						this.setState({
							nextSkillDisplayStatus: ! this.state.nextSkillDisplayStatus,
						});
					}}
				>
					{(this.state.nextSkillDisplayStatus) ? 'Hide' : 'Display'} expected skills
				</Button>
			</div>
		);

		/* Element */

		const element = (
			<div className="TechnicalSkills">
				{summary}
				{actions}
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

TechnicalSkills.propTypes = {
	technicalSkills: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		skills: PropTypes.shape({
			current: PropTypes.arrayOf(PropTypes.string),
			next: PropTypes.arrayOf(PropTypes.string),
		}).isRequired,
	})).isRequired,
};

TechnicalSkills.defaultProps = {
};