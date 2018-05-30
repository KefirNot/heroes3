import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

export default class extends React.PureComponent {
    static displayName = 'Landscape';

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        data: PropTypes.array.isRequired,
    }

    static defaultProps = {
        data: [],
    }

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