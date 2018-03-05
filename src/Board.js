import React, { Component } from 'react';
import './Board.css';

import Card from './Card';

class Board extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			cardsOnBoard: this.props.cards, /* this will always be blank because its a blank board to start */
		}
	} 

	render(){
		// there's probably a better way to do this
		const spaces = Array(this.props.spaces).fill('space');
		// if the index is in the selectedCards array, send through true
		const cards = this.props.cards.map((card) => (
			<Card onClick={() => this.props.onClick(this.props.cards, card.id)} key={card.id} card={card} selected={this.props.selectedCards.includes(card)}/>
			)
		)
		return(
			<div className="board">
					{spaces.map((space, index) => <div key={index} className={space}/>)}			
					{cards}
			</div>

		)
	}
}

export default Board