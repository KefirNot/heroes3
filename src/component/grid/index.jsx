import React from 'react';
import classnames from 'classnames';
import { tileType } from 'store/landscape/tileType';
import './style.scss';

export default class extends React.PureComponent {
	getColor = tile => {
		switch (tile) {
			case tileType.abyss:
				return '#f00';
		}
		return 'transparent';
	}

	render() {
		const { className, data, visible, size: { width, height } } = this.props;
		const style = {
			width: width * 32,
			height: height * 32,
		};

		return (
			<div className={classnames('grid', className, { 'grid-visible': visible })} style={style}>
				{
					[...Array(width * height)].map((u, i) => {
						const x = i % width;
						const y = Math.floor(i / width);
						return <div className="grid-cell" style={{ backgroundColor: this.getColor(data[y][x].type) }}></div>;
					})
				}
			</div>
		);
	}
}