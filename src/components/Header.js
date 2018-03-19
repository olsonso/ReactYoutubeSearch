import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';

class MyHeader extends Component {
	render(){
		return(
			<div className="Header"><center>
			<PageHeader>
				Youtube Search Engine
			</PageHeader>
			</center>
			</div>
		);
	}
	
}

export default MyHeader;