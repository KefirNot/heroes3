import React from 'react';
import urlProvider from './tileUrlProvider';
import Border from './border';
import './style.scss';

const genStyle = (url) => ({ backgroundImage: `url('${url}')` });
const outlandWidth = 2;
const outlandHeight = 2;

export default class extends React.Component {
	get hOutland() {
		const { size } = this.props;
		const width = size.width + 2 + outlandWidth * 2;
		const height = outlandHeight;

		return (
			<div className="surface-horizontal" style={{ width: width * 32, height: height * 32 }}>
				{[...Array(width * outlandHeight)].map(() => <div className="surface-tile" style={genStyle(urlProvider('o'))}></div>)}
			</div>
		);
	}

	get vOutland() {
		const { size } = this.props;
		const width = outlandWidth;
		const height = size.height + 2;

		return (
			<div className="surface-vertical" style={{ width: width * 32, height: height * 32 }}>
				{[...Array(height * outlandWidth)].map(() => <div className="surface-tile" style={genStyle(urlProvider('o'))}></div>)}
			</div>
		);
	}

	render() {
		const { size } = this.props;
		const mainStyle = {
			width: (size.width + 2 + outlandWidth * 2) * 32,
			height: (size.height + 2 + outlandHeight * 2) * 32,
		};
		const contentStyle = {
			width: (size.width + 2) * 32,
			height: (size.height + 2) * 32,
		};
		return (
			<div className="surface" style={mainStyle}>
				{this.hOutland}
				{this.vOutland}
				<div className="surface-content" style={contentStyle}>
					<Border {...this.props} />
				</div>
				{this.vOutland}
				{this.hOutland}
			</div>
		);
	}
}