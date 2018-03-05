import React, { Component } from 'react';
import './SetList.css';

import Card from './Card';

class SetList extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const sets = this.props.sets.map((set, index) => <div key={index} className="setGroup">{(set.map((card) =>
			<Card key={card.id} card={card} />
			))}</div>)
		return(
			<div className='setList'>
				<h4>There are {this.props.sets.length} completed sets</h4> 
				<div className="sets">
					{sets}
				</div>
			</div>
		)
	}
}

export default SetList;