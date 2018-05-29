import React from 'react';
import array2d from 'helper/array2d';
import styleFactory from 'helper/styleFactory';

export default (props) => {
    const size = array2d.getSize(props.data);
    const mainProps = {
        className: props.className,
        style: styleFactory.tileSize(size.width, size.height),
    };

    return (
        <div {...mainProps}>
            {
                array2d.flatten(props.data).map((url, i) => {
                    const tileProps = {
                        key: i,
                        className: 'surface-tile',
                        style: styleFactory.backgroundImage(url),
                    };
                    return <div {...tileProps}></div>;
                })
            }
        </div>
    );
};