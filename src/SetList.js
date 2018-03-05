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
				<h3>There are {this.props.numberSets} completed sets</h3>
				<p>Sets: {this.props.sets}</p>
			</div>
		)
	}
}

export default SetList;