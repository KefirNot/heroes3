import React from 'react';
import urlProvider from './tileUrlProvider';
import './style.scss';

const genStyle = (url) => ({ backgroundImage: `url('${url}')` });

export default class extends React.Component {
	get topBorder() {
		const { width } = this.props.size;

		return (
			<div className="border-top">
				<div className="border-tile" style={genStyle(urlProvider('nw'))}></div>
				{[...Array(width)].map(() => <div className="border-tile" style={genStyle(urlProvider('n'))}></div>)}
				<div className="border-tile" style={genStyle(urlProvider('ne'))}></div>
			</div>
		);
	}

	get bottomBorder() {
		const { width } = this.props.size;

		return (
			<div className="border-bottom">
				<div className="border-tile" style={genStyle(urlProvider('sw'))}></div>
				{[...Array(width)].map(() => <div className="border-tile" style={genStyle(urlProvider('s'))}></div>)}
				<div className="border-tile" style={genStyle(urlProvider('se'))}></div>
			</div>
		);
	}

	get leftBorder() {
		const { height } = this.props.size;

		return (
			<div className="border-left">
				{[...Array(height)].map(() => <div className="border-tile" style={genStyle(urlProvider('w'))}></div>)}
			</div>
		);
	}

	get rightBorder() {
		const { height } = this.props.size;

		return (
			<div className="border-right">
				{[...Array(height)].map(() => <div className="border-tile" style={genStyle(urlProvider('e'))}></div>)}
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