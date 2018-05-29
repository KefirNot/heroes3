import React from 'react';
import styleFactory from 'helper/styleFactory';
import './style.scss';

export default (props) => (
    <div className={props.className}>
        {
            props.data.map((url, i) => {
                const tileProps = {
                    key: i,
                    className: 'surface-tile',
                    style: styleFactory.backgroundImage(url),
                }
                return <div {...tileProps}></div>;
            })
        }
    </div>
);