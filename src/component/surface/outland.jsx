import React from 'react';
import array2d from 'helper/array2d';

export default (props) => {
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