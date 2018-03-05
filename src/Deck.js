import React, { Component } from 'react';
import './Deck.css';

import Card from './Card';

class Deck extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const numCards = this.props.deck.length;
		const cards = this.props.deck.map((card, index) => <Card key={card.id} card={card}/>
	)
		return(
			<div className='deck'>
				<h4>There are {numCards} cards in the deck</h4>
				{cards}
			</div>
		)

	}
}



export default Deck;