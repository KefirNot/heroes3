import React from 'react';
import Outland from './outland';
import Border from './border';
import './style.scss';

export default class extends React.PureComponent {
    render() {
        const { size, outland, border } = this.props;
        const mainStyle = {
            width: (size.width + 2 + outland.width * 2) * 32,
            height: (size.height + 2 + outland.height * 2) * 32,
        };
        const borderStyle = {
            width: (size.width + 2) * 32,
            height: (size.height + 2) * 32,
        };
        const contentStyle = {
            width: size.width * 32,
            height: size.height * 32,
        };

        return (
            <div className="surface" style={mainStyle}>
                <Outland className="surface-outland" data={outland.top} />
                <Outland className="surface-outland" data={outland.left} />
                <div className="surface-border-container" style={borderStyle}>
                    <Border className="surface-border-horizontal" data={border.top} />
                    <Border className="surface-border-vertical" data={border.left} />
                    <div className="surface-border-content" style={contentStyle}></div>
                    <Border className="surface-border-vertical" data={border.right} />
                    <Border className="surface-border-horizontal" data={border.bottom} />
                </div>
                <Outland className="surface-outland" data={outland.right} />
                <Outland className="surface-outland" data={outland.top} />
            </div>
        );
    }
}