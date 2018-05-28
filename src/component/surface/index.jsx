import React from 'react';
import Border from './border';
import * as array2d from 'helper/array2d';
import './style.scss';

const Outland = (props) => {
    const size = array2d.getSize(props.data);
    const mainProps = {
        className: props.className,
        style: {
            width: size.width * 32,
            height: size.height * 32
        },
    };

    return (
        <div {...mainProps}>
            {
                array2d.flatten(props.data).map((url, i) => {
                    const tileProps = {
                        key: i,
                        className: 'surface-tile',
                        style: { backgroundImage: `url('${url}')` },
                    };
                    return <div {...tileProps}></div>;
                })
            }
        </div>
    );
};

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