import React from 'react';
import Outland from './outland';
import Border from './border';
import styleKit from 'helper/styleKit';
import './style.scss';

export default class extends React.PureComponent {
    static displayName = 'Surface';

    render() {
        const { size, outland, border } = this.props;

        return (
            <div className="surface" style={styleKit.tileSize(size.width + 2 + outland.width * 2, size.height + 2 + outland.height * 2)}>
                <Outland className="surface-outland" data={outland.top} />
                <Outland className="surface-outland" data={outland.left} />
                <div className="surface-border-container" style={styleKit.tileSize(size.width + 2, size.height + 2)}>
                    <Border className="surface-border-horizontal" data={border.top} />
                    <Border className="surface-border-vertical" data={border.left} />
                    <div className="surface-border-content" style={styleKit.tileSize(size.width, size.height)}></div>
                    <Border className="surface-border-vertical" data={border.right} />
                    <Border className="surface-border-horizontal" data={border.bottom} />
                </div>
                <Outland className="surface-outland" data={outland.right} />
                <Outland className="surface-outland" data={outland.top} />
            </div>
        );
    }
}