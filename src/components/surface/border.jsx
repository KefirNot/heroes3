import React from 'react';
import './style.scss';

const genStyle = (url) => ({ backgroundImage: `url('${url}')` });

export default class extends React.PureComponent {
	get topBorder() {
		const { top } = this.props.border;

		return (
			<div className="border-top">
				{top.map(url => <div className="border-tile" style={genStyle(url)}></div>)}
			</div>
		);
	}

	get bottomBorder() {
		const { bottom } = this.props.border;

		return (
			<div className="border-bottom">
				{bottom.map(url => <div className="border-tile" style={genStyle(url)}></div>)}
			</div>
		);
	}

	get leftBorder() {
		const { left } = this.props.border;

		return (
			<div className="border-left">
				{left.map(url => <div className="border-tile" style={genStyle(url)}></div>)}
			</div>
		);
	}

	get rightBorder() {
		const { right } = this.props.border;

		return (
			<div className="border-right">
				{right.map(url => <div className="border-tile" style={genStyle(url)}></div>)}
			</div>
		);
	}

	render() {
		const { size, children } = this.props;
		const mainStyle = {
			width: (size.width + 2) * 32,
			height: (size.height + 2) * 32,
		};
		const contentStyle = {
			width: size.width * 32,
			height: size.height * 32,
		};

		return (
			<div className="border" style={mainStyle}>
				{this.topBorder}
				{this.leftBorder}
				<div className="border-content" style={contentStyle}>
					{children}
				</div>
				{this.rightBorder}
				{this.bottomBorder}
			</div>
		);
	}
}