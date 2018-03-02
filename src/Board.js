import React, { Component } from 'react';
import './Board.css';

import Card from './Card';

class Board extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			cardsOnBoard: this.props.cards, /* this will always be blank because its a blank board to start */
			selectedCards: [],
		}

		this.checkSet = this.checkSet.bind(this);
		this.handleCardClick = this.handleCardClick.bind(this);
	}

	handleCardClick(cardsOnBoard, i){
		let selectedCards = this.state.selectedCards

		if (selectedCards.includes(i)) {
				selectedCards.splice(selectedCards.indexOf(i), 1);
		}
		else {
			selectedCards = [...this.state.selectedCards, i]
		}
	
		this.setState({
			selectedCards: selectedCards
		})

		if (selectedCards.length == 3) {
			this.checkSet(selectedCards)
		}
	}

	checkSet(selectedCards){
		const card1 = this.props.cards[selectedCards[0]];
		const card2 = this.props.cards[selectedCards[1]];
		const card3 = this.props.cards[selectedCards[2]];
		const cardProps = {color: '', shape: '', pattern: '', number: ''};
		let setCheck = [];


		for (let prop in cardProps) {
			const checkProps = card1[prop] === card2[prop] === card3[prop] || (card1[prop] !== card2[prop]) && (card2[prop] !== card3[prop]) && (card1[prop] !== card3[prop]);
			
			setCheck = [...setCheck, checkProps]
		}

		const isSet = setCheck.every((val) => val === true)
		console.log(isSet)


		// once selectedCards.length == 3, check if they are indeed a set
		// move the cards to complete set
		// trigger a deal
	}

	render(){
		// there's probably a better way to do this
		const spaces = Array(this.props.spaces).fill('space');
		// if the index is in the selectedCards array, send through true
		const cards = this.props.cards.map((card, index) => (
			<Card onClick={() => this.handleCardClick(this.props.cards, index)} key={index} card={card} selected={this.state.selectedCards.includes(index)}/>
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