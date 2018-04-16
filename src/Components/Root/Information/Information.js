import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Icon from 'react-fa';

import './Information.less';

export default class Information extends Component {

	/* Generic */

	constructor(props) {
		super(props);

		/* Attributes */

	}

	render() {

		/* Element */

		const element = (
			<div className="Information">
				<table className="informationAndPicture">
					<tbody>
						<tr>
							<td className="information">
								<p className="fullName">
									{this.props.fullName}
								</p>
								<p className="titleAndDegree">
									{this.props.title}
									<br/>
									{this.props.degree}
								</p>
								<ul>
									{
										this.props.information.map((information, index) => {
											return (
												<li key={index}>
													<span className="label">
														<Icon
															className="icon"
															name={information.icon}
															fixedWidth={true}
														/>
														{information.label}
													</span>
													<span className="text">
														{information.text}
													</span>
												</li>
											)
										})
									}
								</ul>
							</td>
							<td className="picture">
								<div className="separation"/>
								<div className="image">
									<img
										src={this.props.pictureURL}
										height="250"
									/>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<ul className="networks">
					{
						this.props.networks.map((network, index) => {
							return (
								<li
									key={index}
									tooltip={network.tooltip}
								>
									<a
										href={network.URL}
										target="_blank"
									>
										<Icon
											name={network.icon}
										/>
									</a>
								</li>
							);
						})
					}
				</ul>
			</div>
		);

		/* Return */

		return element;
	}

	/* Specific */

};

Information.propTypes = {
	fullName: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	degree: PropTypes.string.isRequired,
	pictureURL: PropTypes.string.isRequired,
	information: PropTypes.arrayOf(PropTypes.shape({
		icon: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	})).isRequired,
	networks: PropTypes.arrayOf(PropTypes.shape({
		icon: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		URL: PropTypes.string.isRequired,
		tooltip: PropTypes.string.isRequired,
	})).isRequired,
};

Information.defaultProps = {
};