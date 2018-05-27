import React from 'react';
import Landscape from './components/landscape';
import Surface from './components/surface';
import Grid from './components/grid';
import { connect } from 'react-redux'
import * as keyboard from './helpers/keyboard';
import './style.scss';

class App extends React.Component {
	componentDidMount() {
		keyboard.startListen(this.props.dispatch);
	}

	render() {
		const { map: { landscape: { data, size } }, ui } = this.props;
		return (
			<div>
				<Surface size={size}>
					<div className="map" style={{ width: size.width * 32, height: size.height * 32 }}>
						<Landscape data={data} size={size} className="map-content" />
						{ui.showGrid ? <Grid data={data} size={size} className="map-content" /> : null}
					</div>
				</Surface>
			</div>
		);
	}
}

export default connect(state => ({ ...state }))(App);