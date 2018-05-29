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
        const mapStyle = {
            width: (size.width + outland.width * 2 + 2) * 32,
            height: (size.height + outland.height * 2 + 2) * 32,
        };
        const contentStyle = {
            top: (outland.height + 1) * 32,
            right: (outland.width + 1) * 32,
            bottom: (outland.height + 1) * 32,
            left: (outland.width + 1) * 32,
        };

        return (
            <div className="map" style={mapStyle}>
                <Landscape {...{ data, style: contentStyle, className: 'map-content' }} />
                <Grid {...{ data, size, visible: ui.showGrid, style: contentStyle, className: 'map-content' }} />
                <Surface {...{ size, outland, border, className: 'map-content' }} />
            </div>
        );
    }
}

export default connect(state => ({ ...state }))(App);