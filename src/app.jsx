import React from 'react';
import Landscape from 'component/landscape';
import Surface from 'component/surface';
import Grid from 'component/grid';
import { connect } from 'react-redux'
import keyboard from 'helper/keyboard';
import './style.scss';

class App extends React.Component {
	componentDidMount() {
		keyboard.startListen(this.props.dispatch);
	}

	render() {
		const { map: { landscape: { data, size }, surface: { outland, border } }, ui } = this.props;
		return (
			<div>
				<Surface size={size} outland={outland} border={border}>
					<div className="map" style={{ width: size.width * 32, height: size.height * 32 }}>
						<Landscape data={data} size={size} className="map-content" />
						<Grid data={data} size={size} className="map-content" visible={ui.showGrid} />
					</div>
				</Surface>
			</div>
		);
	}
}

export default connect(state => ({ ...state }))(App);