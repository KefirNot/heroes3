import React from 'react';
import classnames from 'classnames';
import { tileType } from 'store/landscape/tileType';
import styleFactory from 'helper/styleFactory';
import './style.scss';

export default class extends React.PureComponent {
    render() {
        const { className, data, size: { width, height } } = this.props;

        return (
            <div className={classnames('ground', className)} style={styleFactory.tileSize(width, height)}>
                {
                    data.map(x => (<div></div>))
                }
            </div>
        );
    }
}