import React, { Component } from 'react';
import './Game.css';

import Deck from './Deck';
import Board from './Board';
import SetList from './SetList';

class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			deck: [],
			availableSpaces: 12,
			cardsOnBoard: [],
			selectedCards: [],
			sets:[]
		};
		this.deal = this.deal.bind(this);
		this.createDeck = this.createDeck.bind(this);
		this.shuffleDeck = this.shuffleDeck.bind(this);
		this.checkSet = this.checkSet.bind(this);
		this.handleCardClick = this.handleCardClick.bind(this);
		this.moveSet = this.moveSet.bind(this);

	}

	createDeck() {
		// create new deck
		const colors = ['red', 'green', 'purple']
		const numbers = [1,2,3]
		const shapes = ['wave', 'diamond', 'oval']
		const patterns = ['solid', 'striped', 'open']

		function cartesian(){
		  let r = [], arg=arguments, max = arg.length-1
		  function helper(arr, i) {
		    for (let j=0, l=arg[i].length; j<l; j++) {
		      var a = arr.slice(0);
		      a.push(arg[i][j]);
		      if (i===max)
		        r.push(a)
		      else
		        helper(a, i+1);
		    }
		  }
		  helper([],0);
		  return r;
		}

		const cards = cartesian(colors, numbers, shapes, patterns);
		const fullDeck = cards.map(([color, number, shape, pattern, id], index) => ({id: index, color, number, shape, pattern}));


		this.shuffleDeck(fullDeck);

	}

	shuffleDeck(array) {
		const shuffle = (array) => {
		  let currentIndex = array.length, temporaryValue, randomIndex;
		  while (0 !== currentIndex) {
		    randomIndex = Math.floor(Math.random() * currentIndex)
		    currentIndex -= 1
		    temporaryValue = array[currentIndex]
		    array[currentIndex] = array[randomIndex]
		    array[randomIndex] = temporaryValue
		  }
		  return array
		}
		this.setState({
			deck: shuffle(array)
		})
	}


	deal(){
		const numCards = this.state.availableSpaces;
		const deck = this.state.deck;
		const cardsToDeal = deck.splice(0, numCards)
		this.setState({
			availableSpaces: 0,
			cardsOnBoard: this.state.cardsOnBoard.concat(cardsToDeal),
			deck: deck,
		});
	}

	handleCardClick(cardsOnBoard, cardID){
		let selectedCards = this.state.selectedCards
		let card = cardsOnBoard.find(function(card) {return card.id === cardID});


		if (selectedCards.includes(card)) {
				// deselect card, remove from array
				selectedCards.splice(selectedCards.indexOf(card), 1);
		}
		else {
			// select card, add to array
			selectedCards = [...this.state.selectedCards, card]
		}
	
		this.setState({
			selectedCards: selectedCards
		})

		if (selectedCards.length === 3) {
			this.checkSet(selectedCards)
		}
	}

	checkSet(selectedCards){
		const cardProps = {color: '', shape: '', pattern: '', number: ''};

		// prob a better way to create this dynamically
		const card1 = selectedCards[0]
		const card2 = selectedCards[1]
		const card3 = selectedCards[2]
		let setCheck = [];


		// prob a better way to create this dynamically
		for (let prop in cardProps) {
			const checkProps = (card1[prop] === card2[prop]) && (card2[prop] === card3[prop]) && (card1[prop] === card3[prop]) || (card1[prop] !== card2[prop]) && (card2[prop] !== card3[prop]) && (card1[prop] !== card3[prop]);
			
			setCheck = [...setCheck, checkProps]
		}

		const isSet = setCheck.every((val) => val === true)

		if (isSet) {
			this.setState({
				selectedCards: [],
			});
			this.moveSet(selectedCards);
		}
	}

	moveSet(set){
		const cardsOnBoard = this.state.cardsOnBoard

		// figure out more dynamic way to do this
		cardsOnBoard.splice(cardsOnBoard.indexOf(set[0]), 1);
		cardsOnBoard.splice(cardsOnBoard.indexOf(set[1]), 1);
		cardsOnBoard.splice(cardsOnBoard.indexOf(set[2]), 1);

		this.setState({
			sets: [...this.state.sets, set],
			availableSpaces: 3
		})
	}



	render(){
		return(
			<div className="game">
				<h1>ReSet</h1>
				<button onClick={this.createDeck}>Create Deck</button>
				<button onClick={this.deal}>Deal</button>
				<div className="gameContainer">
					<Deck deck={this.state.deck}/>
					<Board spaces={this.state.availableSpaces} cards={this.state.cardsOnBoard} onClick={this.handleCardClick} selectedCards={this.state.selectedCards}/>
					<SetList sets ={this.state.sets}/>
				</div>
			</div>
		)
	}
}



export default Game