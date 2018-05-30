import React from 'react';
import classnames from 'classnames';
import { tileType } from 'store/landscape/tileType';
import styleKit from 'helper/styleKit';
import array from 'helper/array';
import PropTypes from 'prop-types';
import './style.scss';

export default class extends React.PureComponent {
    static displayName = 'Grid';

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        visible: PropTypes.bool,
        data: PropTypes.array.isRequired,
        size: PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }).isRequired,
    }

    static defaultProps = {
        data: [],
        size: {
            width: 0,
            height: 0,
        }
    }

    state = {
        data: [],
    };

    static getDerivedStateFromProps(props) {
        const { data, size: { width, height } } = props
        return {
            data: array.empty(width * height).map((u, i) => {
                const x = i % width;
                const y = Math.floor(i / width);
                const color = data[y][x].type === tileType.abyss ? '#f00' : 'transparent';
                return { x, y, color };
            }),
        };
    }

    render() {
        const { className, style, visible } = this.props;
        const props = {
            className: classnames(
                'grid',
                className,
                { 'grid-visible': visible }
            ),
            style,
        }

        return (
            <div {...props}>
                {
                    this.state.data.map(cell => <div key={`${cell.x}-${cell.y}`} className="grid-cell" style={styleKit.backgroundColor(cell.color)}></div>)
                }
            </div>
        );
    }
}