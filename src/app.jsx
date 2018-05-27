import React from 'react';
import Landscape from './components/landscape';
import Surface from './components/surface';
import Grid from './components/grid';
import { connect } from 'react-redux'
import './style.scss';

class App extends React.Component {
	render() {
		const { map: { landscape: { data, size } }, ui } = this.props;
		return (
			<Surface size={size}>
				<div className="map" style={{ width: size.width * 32, height: size.height * 32 }}>
					<Landscape data={data} size={size} className="map-content" />
					{ui.showGrid ? <Grid data={data} className="map-content" /> : null}
				</div>
			</Surface>
		);
	}
}

export default connect(state => ({ ...state }))(App);