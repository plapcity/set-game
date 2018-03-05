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
			completedSets: 0,
			cardsInSets:[]
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
		const cardsOnBoard = deck.splice(0, numCards)
		this.setState({
			availableSpaces: 0,
			cardsOnBoard: cardsOnBoard,
			deck: deck,
		});
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
		const cardsOnBoard = this.state.cardsOnBoard;
		var card1 = cardsOnBoard.find(function (card1) {return card1.id == selectedCards[0]})
		var card2 = cardsOnBoard.find(function (card2) {return card2.id == selectedCards[1]})
		var card3 = cardsOnBoard.find(function (card3) {return card3.id == selectedCards[2]})
		const set = [card1, card2, card3];
		const cardProps = {color: '', shape: '', pattern: '', number: ''};
		let setCheck = [];



		for (let prop in cardProps) {
			// console.log(prop, card1[prop], card2[prop], card3[prop]);
			const checkProps = (card1[prop] === card2[prop]) && (card2[prop] == card3[prop]) && (card1[prop] == card3[prop]) || (card1[prop] !== card2[prop]) && (card2[prop] !== card3[prop]) && (card1[prop] !== card3[prop]);
			
			setCheck = [...setCheck, checkProps]
		}

		const isSet = setCheck.every((val) => val === true)

		if (isSet) {
			this.setState({
				completedSets: this.state.completedSets+1
			});
			this.moveSet(selectedCards);
		}
		alert(isSet ? "IT'S A SET" : "IT'S NOT A SET")


	}

	moveSet(set){
		// TODO: FIGURE OUT HOW TO ACTUALLY MOVE SET OUT OF BOARD
		console.log("move set", set);
		this.setState({
			cardsInSets: [...this.state.cardsInSets, set]
		})
	}



	render(){
		let selectedCards = this.state.selectedCards;
		console.log(selectedCards);
		return(
			<div className="game">
				<h1>ReSet</h1>
				<button onClick={this.createDeck}>Create Deck</button>
				<button onClick={this.deal}>Deal</button>
				<div className="gameContainer">
					<Deck deck={this.state.deck}/>
					<Board spaces={this.state.availableSpaces} cards={this.state.cardsOnBoard} onClick={this.handleCardClick} selectedCards={selectedCards}/>
					<SetList numberSets={this.state.completedSets}/>
				</div>
			</div>
		)
	}
}



export default Game