import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './ExtraCurricularActivities.less';

export default class ExtraCurricularActivities extends Component {

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
						this.props.extraCurricularActivities.map((extraCurricularActivityValue, extraCurricularActivityIndex) => {
							return (
								<tr key={extraCurricularActivityIndex}>
									<td className="label">
										{extraCurricularActivityValue.name}
									</td>
									<td className="description">
										{extraCurricularActivityValue.description}
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
			<div className="ExtraCurricularActivities">
				{summary}
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

ExtraCurricularActivities.propTypes = {
	extraCurricularActivities: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	})).isRequired,
};

ExtraCurricularActivities.defaultProps = {
};