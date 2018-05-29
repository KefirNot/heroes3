import React from 'react';
import classnames from 'classnames';
import { tileType } from 'store/landscape/tileType';
import './style.scss';

export default class extends React.PureComponent {
    render() {
        const { className, data, size: { width, height } } = this.props;
        const style = {
            width: width * 32,
            height: height * 32,
        };

        return (
            <div className={classnames('ground', className)} style={style}>
                {
                    data.map(x => (<div></div>))
                }
            </div>
        );
    }
}