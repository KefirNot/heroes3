import React from 'react';
import './style.scss';

export default (props) => (
    <div className={props.className}>
        {
            props.data.map((url, i) => {
                const tileProps = {
                    key: i,
                    className: 'surface-tile',
                    style: { backgroundImage: `url('${url}')` },
                }
                return <div {...tileProps}></div>;
            })
        }
    </div>
);