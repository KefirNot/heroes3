import React from 'react';
import classnames from 'classnames';
import styleKit from 'helper/styleKit';
import './style.scss';

export default class extends React.PureComponent {
    render() {
        const { className, style, data } = this.props;
        const props = {
            className: classnames('ground', className),
            style
        };

        return (
            <div className={classnames('ground', className)} style={style}>
                {
                    data.map(gObj => {
                        const style = styleKit.merge(
                            styleKit.tileCoords(gObj.coord.x, gObj.coord.y),
                            styleKit.backgroundImage(gObj.url),
                            styleKit.tileSize(gObj.size.width, gObj.size.height)
                        );
                        return (
                            <div className="ground-object" style={style}></div>
                        );
                    })
                }
            </div>
        );
    }
}