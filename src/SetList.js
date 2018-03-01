import React, { Component } from 'react';
import './SetList.css';

import Card from './Card';

class SetList extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='setList'>
				<h3>There are {this.props.sets} completed sets</h3>
			</div>
		)

	}
}



export default SetList;