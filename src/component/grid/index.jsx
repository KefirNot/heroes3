import React from 'react';
import classnames from 'classnames';
import { tileType } from 'store/landscape/tileType';
import styleFactory from 'helper/styleFactory';
import array from 'helper/array';

import './style.scss';

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        const { data, size: { width, height } } = props;
        this.state = {
            data: [],
        };
    }

    static getDerivedStateFromProps(props) {
        const { size: { width, height } } = props
        return {
            data: array.empty(width * height).map((u, i) => {
                const x = i % width;
                const y = Math.floor(i / width);
                return props.data[y][x].type === tileType.abyss ? '#f00' : 'transparent';
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
                    this.state.data.map(backgroundColor => <div className="grid-cell" style={styleFactory.backgroundColor(backgroundColor)}></div>)
                }
            </div>
        );
    }
}