import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class extends React.PureComponent {
	render() {
		const { className, data, size } = this.props;
		return (
			<div className={classnames('landscape', className )} style={{ width: size.width * 32, height: size.height * 32 }}>
				{
					data.map(row => row.map(cell => <div className="tile" style={{ backgroundImage: `url('${cell.url}')` }}></div>))
				}
			</div>
		);
	}
}