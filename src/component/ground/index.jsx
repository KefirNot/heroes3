import React from 'react';
import classnames from 'classnames';
import styleKit from 'helper/styleKit';
import PropTypes from 'prop-types';
import './style.scss';

export default class extends React.PureComponent {
    static displayName = 'Ground';

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        data: PropTypes.array.isRequired,
    }

    static defaultProps = {
        data: [],
    }

    render() {
        const { className, style, data } = this.props;

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
                            <div key={gObj.id} className="ground-object" style={style}></div>
                        );
                    })
                }
            </div>
        );
    }
}