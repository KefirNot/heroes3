import React from 'react';
import Landscape from './components/landscape';
import Surface from './components/surface';
import LandscapeData from './components/landscape/LandscapeData';
import * as tileFactory from './components/landscape/tileFactory';
import Grid from './components/grid';
import mapData from './mapData';
import './style.scss';

const mapSize = 20;

export default class extends React.Component {
	render() {
		const landscapeData = new LandscapeData(mapData, true);
		const { size } = landscapeData;

		return (
			<Surface size={size}>
				<div className="map" style={{ width: size.width * 32, height: size.height * 32 }}>
					<Landscape data={landscapeData} className="map-content" />
					<Grid data={landscapeData} className="map-content" />
				</div>
			</Surface>
		);
	}
}