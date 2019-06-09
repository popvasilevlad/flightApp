import React, { Component } from 'react';
import { Icon } from 'antd';

export default class LoadingScreen extends Component {
	render() {
		return(
			<div className={'loading-screen'}>
				<Icon type="sync" spin />
			</div>
		)
	}
}