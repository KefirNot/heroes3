import React from 'react';
import './style.scss';

const HorizontalBorder = (props) => {
    const { data } = props;

    return (
        <div className="border-horizontal">
            {
                data.map((url, i) => {
                    const props = {
                        key      : i,
                        className: 'border-tile',
                        style    : { backgroundImage: `url('${url}')` },
                    }
                    return <div {...props}></div>;
                })
            }
        </div>
    );
}

const VerticalBorder = (props) => {
    const { data } = props;

    return (
        <div className="border-vertical">
            {
                data.map((url, i) => {
                    const props = {
                        key      : i,
                        className: 'border-tile',
                        style    : { backgroundImage: `url('${url}')` },
                    }
                    return <div {...props}></div>;
                })
            }
        </div>
    );
}

export default class extends React.PureComponent {
    render() {
        const { size, children, border: { top, right, bottom, left } } = this.props;
        const mainStyle = {
            width: (size.width + 2) * 32,
            height: (size.height + 2) * 32,
        };
        const contentStyle = {
            width: size.width * 32,
            height: size.height * 32,
        };

        return (
            <div className="border" style={mainStyle}>
                <HorizontalBorder data={top} />
                <VerticalBorder data={left} />
                <div className="border-content" style={contentStyle}>
                    {children}
                </div>
                <VerticalBorder data={right} />
                <HorizontalBorder data={bottom} />
            </div>
        );
    }
}