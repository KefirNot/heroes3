import React from 'react';
import urlProvider from './tileUrlProvider';
import Border from './border';
import './style.scss';

export default class extends React.PureComponent {
	getSize = (data) => ({
		width: data[0].length,
		height: data.length,
	});

	genStyle = (url) => ({ backgroundImage: `url('${url}')` });

	get topOutland() {
		const { outland: { top } } = this.props;
		const size = this.getSize(top);
		return (
			<div className="surface-horizontal" style={{ width: size.width * 32, height: size.height * 32 }}>
				{[].concat.apply([], top).map(url => <div className="surface-tile" style={this.genStyle(url)}></div>)}
			</div>
		);
	}

	get bottomOutland() {
		const { outland: { bottom } } = this.props;
		const size = this.getSize(bottom);
		return (
			<div className="surface-horizontal" style={{ width: size.width * 32, height: size.height * 32 }}>
				{[].concat.apply([], bottom).map(url => <div className="surface-tile" style={this.genStyle(url)}></div>)}
			</div>
		);
	}

	get leftOutland() {
		const { outland: { left } } = this.props;
		const size = this.getSize(left);
		return (
			<div className="surface-vertical" style={{ width: size.width * 32, height: size.height * 32 }}>
				{[].concat.apply([], left).map(url => <div className="surface-tile" style={this.genStyle(url)}></div>)}
			</div>
		);
	}

	get rightOutland() {
		const { outland: { right } } = this.props;
		const size = this.getSize(right);
		return (
			<div className="surface-vertical" style={{ width: size.width * 32, height: size.height * 32 }}>
				{[].concat.apply([], right).map(url => <div className="surface-tile" style={this.genStyle(url)}></div>)}
			</div>
		);
	}

	render() {
		const { size, outland } = this.props;
		const mainStyle = {
			width: (size.width + 2 + outland.width * 2) * 32,
			height: (size.height + 2 + outland.height * 2) * 32,
		};
		const contentStyle = {
			width: (size.width + 2) * 32,
			height: (size.height + 2) * 32,
		};
		return (
			<div className="surface" style={mainStyle}>
				{this.topOutland}
				{this.leftOutland}
				<div className="surface-content" style={contentStyle}>
					<Border {...this.props} />
				</div>
				{this.rightOutland}
				{this.bottomOutland}
			</div>
		);
	}
}