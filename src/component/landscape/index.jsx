import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class extends React.PureComponent {
    render() {
        const { className, data, style } = this.props;
        const props = {
            className: classnames('landscape', className),
            style
        }
        return (
            <div {...props}>
                {
                    data.map((row, y) => row.map((cell, x) => <div key={x + y} className="tile" style={{ backgroundImage: `url('${cell.url}')` }}></div>))
                }
            </div>
        );
    }
}