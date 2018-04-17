import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './LanguageSkills.less';

export default class LanguageSkills extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

	}

	render() {

		/* Summary */

		const summary = (
			<table>
				<tbody>
					{
						this.props.languageSkills.map((languageSkillValue, languageSkillValueIndex) => {

							/* Certification */

							let certification = null;

							if(languageSkillValue.certification)
							{
								certification = (
									<p className="certification">
										{languageSkillValue.certification}
									</p>
								);
							}

							/* Return */

							return (
								<tr key={languageSkillValueIndex}>
									<td className="label">
										{languageSkillValue.name}
									</td>
									<td className="information">
										<p className="level">
											{languageSkillValue.level}
										</p>
										{certification}
									</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		);

		/* Element */

		const element = (
			<div className="LanguageSkills">
				{summary}
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

LanguageSkills.propTypes = {
	languageSkills: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		level: PropTypes.string.isRequired,
		certification: PropTypes.string,
	})).isRequired,
};

LanguageSkills.defaultProps = {
};