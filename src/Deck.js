import React, { Component } from 'react';
import './Deck.css';

import Card from './Card';

class Deck extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='deck'>
				<p>There are {this.props.deck.length} cards remaining in the deck</p>
				{this.props.deck.map((card) => <Card card={card}/>)}
			</div>
		)

	}
}



export default Deck;