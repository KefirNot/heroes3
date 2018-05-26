import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class extends React.Component {
	render() {
		const { className, data, data: { tiles, size } } = this.props;
		return (
			<div className={classnames('landscape', className )} style={{ width: size.width * 32, height: size.height * 32 }}>
				{
					tiles.map(row => row.map(cell => <div className="tile" style={{ backgroundImage: `url('${cell.url}')` }}></div>))
				}
			</div>
		);
	}
}