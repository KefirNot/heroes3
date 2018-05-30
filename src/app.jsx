import React from 'react';
import Landscape from 'component/landscape';
import Surface from 'component/surface';
import Grid from 'component/grid';
import Ground from 'component/ground';
import { connect } from 'react-redux'
import keyboard from 'helper/keyboard';
import styleKit from 'helper/styleKit';
import PropTypes from 'prop-types';
import './style.scss';

class App extends React.Component {
    static displayName = 'ApplicationRoot';

    static propTypes = {
        ui: PropTypes.shape({
            showGrid: PropTypes.bool.isRequired
        }).isRequired,
        map: PropTypes.shape({
            landscape: PropTypes.object,
            ground: PropTypes.object,
            surface: PropTypes.object,
        }).isRequired,
    }

    static defaultProps = {
        ui: {},
        map: {},
    }

    componentDidMount() {
        keyboard.startListen(this.props.dispatch);
    }

    render() {
        const { map: { landscape: { data, size }, ground, surface: { outland, border } }, ui } = this.props;
        const contentStyle = {
            top: (outland.height + 1) * 32,
            right: (outland.width + 1) * 32,
            bottom: (outland.height + 1) * 32,
            left: (outland.width + 1) * 32,
        };

        return (
            <div className="map" style={styleKit.tileSize((size.width + outland.width * 2 + 2), (size.height + outland.height * 2 + 2))}>
                <Landscape {...{ data, style: contentStyle, className: 'map-content' }} />
                <Ground {...{ data: ground.data, style: contentStyle, className: 'map-content' }} />
                <Grid {...{ data, size, visible: ui.showGrid, style: contentStyle, className: 'map-content' }} />
                <Surface {...{ size, outland, border }} />
            </div>
        );
    }
}

export default connect(state => ({ ...state }))(App);