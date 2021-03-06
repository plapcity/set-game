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
		this.baseState = this.state
		this.deal = this.deal.bind(this);
		this.createDeck = this.createDeck.bind(this);
		this.shuffleDeck = this.shuffleDeck.bind(this);
		this.checkSet = this.checkSet.bind(this);
		this.handleCardClick = this.handleCardClick.bind(this);
		this.moveSet = this.moveSet.bind(this);
		this.dealMore = this.dealMore.bind(this);
		this.compareProp = this.compareProp.bind(this);
		this.compareAllProps = this.compareAllProps.bind(this);
		this.resetGame = this.resetGame.bind(this);

	}

	resetGame() {
		this.setState(this.baseState);
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

		// FOR EASY TESTING: use unshuffled deck (comment out shuffleDeck() call)
		// this.setState({
		// 	deck: fullDeck
		// }, this.deal(fullDeck))
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
		const deck = shuffle(array)
		this.setState({
			deck: deck
		})

		this.deal(deck)
	}


	deal(deck){
		const numCards = this.state.availableSpaces;
		const cardsToDeal = deck.splice(0, numCards)
		this.setState({
			availableSpaces: 0,
			cardsOnBoard: this.state.cardsOnBoard.concat(cardsToDeal),
			deck: deck,
		});
	}

	dealMore(){
		const deck = this.state.deck;
		const cardsToDeal = deck.splice(0, 3)
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
		}, () =>	{if (this.state.selectedCards.length === 3) {
			this.checkSet(this.state.selectedCards)
		}})
	}


	checkSet(selectedCards){
		const cardProps = {color: '', shape: '', pattern: '', number: ''};

		if (this.compareAllProps(selectedCards, cardProps)) {
			this.setState({
				selectedCards: [],
			});
			this.moveSet(selectedCards);
		}
		else {
			setTimeout(() => {
				alert("Heyo - that's not a set");
				this.setState({
					selectedCards: []
				})
			}, 10)
	
		}
	}

	compareAllProps(selectedCards, cardProps){
		for (let prop in cardProps) {
			if (!this.compareProp(selectedCards, prop)) {
				return false;
			}
		}
		return true;
	}	

	compareProp(selectedCards, prop){
		const card1 = selectedCards[0]
		const card2 = selectedCards[1]
		const card3 = selectedCards[2]

		// const checkProps = (card1[prop] === card2[prop]) && (card2[prop] === card3[prop]) || (card1[prop] !== card2[prop]) && (card2[prop] !== card3[prop]) && (card1[prop] !== card3[prop]);
		if (card1[prop] === card2[prop]) {
			return (card2[prop] === card3[prop])
		}
		else {
			return (card2[prop] !== card3[prop]) && (card1[prop] !== card3[prop])
		}
	}

	moveSet(set){
		const cardsOnBoard = this.state.cardsOnBoard
		const spacesToFill = cardsOnBoard.length > 12 ? 0 : 3

		// probably shouldn't be updating the array directly? 
		set.map((card) => (
			cardsOnBoard.splice(cardsOnBoard.indexOf(card), 1)
			))

		this.setState({
			sets: [...this.state.sets, set],
			availableSpaces: spacesToFill,
			cardsOnBoard: cardsOnBoard
		}, function(){this.deal(this.state.deck)})
		// ^ using a setState callback to auto-call "deal" once a set is moved out
	}


	render(){
		return(
			<div className="game">
				<div className="flexContainer">
					<div className="gameInfo">
						<h1>ReSet</h1>
						<small><a href="https://puzzles.setgame.com/set/rules_set.htm" target="_blank">Rules of Set</a></small>
						<div className="buttonWrapper">
							<button disabled={this.state.deck.length > 0} onClick={this.createDeck}>Start Game</button>
							<button disabled={(this.state.cardsOnBoard.length > 12) || (this.state.cardsOnBoard.length < 12) }onClick={this.dealMore}>Deal more!</button>
							<button onClick={this.resetGame}>Restart Game</button>
						</div>
						<Deck deck={this.state.deck}/>
						<SetList sets ={this.state.sets}/>
					</div>
					<Board spaces={this.state.availableSpaces} cards={this.state.cardsOnBoard} onClick={this.handleCardClick} selectedCards={this.state.selectedCards}/>
				</div>
				
			</div>
		)
	}
}



export default Game