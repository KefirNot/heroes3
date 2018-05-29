import React from 'react';
import classnames from 'classnames';
import { tileType } from 'store/landscape/tileType';
import './style.scss';

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        const { data, size: { width, height } } = props;
        this.state = {
            data: [],
        };
    }

    getDerivedStateFromProps(props) {
        return {
            data: [...Array(width * height)].map((u, i) => {
                const x = i % width;
                const y = Math.floor(i / width);
                return this.getColor(data[y][x].type);
            }),
        };
    }

    getColor = tile => {
        switch (tile) {
            case tileType.abyss:
                return '#f00';
        }
        return 'transparent';
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
                    this.state.data.map(backgroundColor => <div className="grid-cell" style={{ backgroundColor }}></div>)
                }
            </div>
        );
    }
}