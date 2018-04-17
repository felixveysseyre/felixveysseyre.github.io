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
						this.props.languageSkills.map((languageSkill, index) => {
							let certification = null;

							if(languageSkill.certification)
							{
								certification = (
									<p className="certification">
										{languageSkill.certification}
									</p>
								);
							}

							return (
								<tr key={index}>
									<td className="label">
										{languageSkill.name}
									</td>
									<td className="information">
										<p className="level">
											{languageSkill.level}
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