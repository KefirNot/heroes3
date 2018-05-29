import React from 'react';
import Border from './border';

import Outland from './outland';
import './style.scss';

export default class extends React.PureComponent {
    render() {
        const { size, outland } = this.props;
        const mainStyle = {
            width: (size.width + 2 + outland.width * 2) * 32,
            height: (size.height + 2 + outland.height * 2) * 32,
        };
        const contentStyle = {
            width: (size.width + 2) * 32,
            height: (size.height + 2) * 32,
        };
        return (
            <div className="surface" style={mainStyle}>
                <Outland className="surface-horizontal" data={outland.top} />
                <Outland className="surface-vertical" data={outland.left} />
                <div className="surface-content" style={contentStyle}>
                    <Border {...this.props} />
                </div>
                <Outland className="surface-vertical" data={outland.right} />
                <Outland className="surface-horizontal" data={outland.top} />
            </div>
        );
    }
}