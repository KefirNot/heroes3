import React from 'react';
import './style.scss';

const Border = (props) => (
    <div className={props.className}>
        {
            props.data.map((url, i) => {
                const tileProps = {
                    key      : i,
                    className: 'border-tile',
                    style    : { backgroundImage: `url('${url}')` },
                }
                return <div {...tileProps}></div>;
            })
        }
    </div>
);

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
                <Border className="border-horizontal" data={top} />
                <Border className="border-vertical" data={left} />
                <div className="border-content" style={contentStyle}>
                    {children}
                </div>
                <Border className="border-vertical" data={right} />
                <Border className="border-horizontal" data={bottom} />
            </div>
        );
    }
}