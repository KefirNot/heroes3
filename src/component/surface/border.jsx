import React from 'react';
import styleKit from 'helper/styleKit';
import './style.scss';

export default (props) => (
    <div className={props.className}>
        {
            props.data.map((url, i) => {
                const tileProps = {
                    key: i,
                    className: 'surface-tile',
                    style: styleKit.backgroundImage(url),
                }
                return <div {...tileProps}></div>;
            })
        }
    </div>
);