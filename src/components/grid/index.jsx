import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class extends React.Component {
	getColor = tile => {
		switch (tile) {
			case 'a':
				return '#f00';
		}
		return 'transparent';
	}

	render() {
		const { className, data: { tiles, size: { width, height } } } = this.props;
		const style = {
			width: width * 32,
			height: height * 32,
		};

		return (
			<div className={classnames('grid', className)} style={style}>
				{
					[...Array(width * height)].map((u, i) => {
						const x = i % width;
						const y = Math.floor(i / width);
						return <div className="grid-cell" style={{ backgroundColor: this.getColor(tiles[y][x].type) }}></div>;
					})
				}
			</div>
		);
	}
}