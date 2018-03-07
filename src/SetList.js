import React, { Component } from 'react';
import './SetList.css';

import Card from './Card';

class SetList extends React.Component {
	constructor(props){
		super(props);
		this.renderSets = this.renderSets.bind(this);
	}


	renderSets(){
		if (this.props.sets.length > 0) {
			const sets = this.props.sets.map((set, index) => 
				<div key={index} className="setGroup">
					{(set.map((card) =>
						<Card key={card.id} card={card} />
					))}
				</div>
			)
			return sets;
		} 
	}

	render(){
		const text = this.props.sets.length > 0 ? `${this.props.sets.length} Sets:` : "No sets yet."
		return(
			<div id="setList" className='setList'>
				<h3>{text}</h3>
				{this.renderSets()}
				
			</div>
		)
	}
}

export default SetList;