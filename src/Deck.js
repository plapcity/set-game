import React, { Component } from 'react';
import './Deck.css';

import Card from './Card';

class Deck extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<h3 className='deck'>There are {this.props.deck.length} cards in the deck</h3>
		)
	}
}



export default Deck;