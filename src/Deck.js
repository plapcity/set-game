import React, { Component } from 'react';
import './Deck.css';

import Card from './Card';

class Deck extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const numCards = this.props.deck.length;
		const cards = this.props.deck.map((card, index) => <Card key={index} card={card}/>
	)
		return(
			<div className='deck'>
				<p>There are {numCards} cards remaining in the deck</p>
				{cards}
			</div>
		)

	}
}



export default Deck;