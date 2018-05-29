import React from 'react';
import classnames from 'classnames';
import styleFactory from 'helper/styleFactory';
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
                        const style = styleFactory.merge(
                            styleFactory.tileCoords(gObj.coord.x, gObj.coord.y),
                            styleFactory.backgroundImage(gObj.url),
                            styleFactory.tileSize(gObj.size.width, gObj.size.height)
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