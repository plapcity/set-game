import React, { Component } from 'react';
import './Game.css';

import Deck from './Deck';
import Board from './Board';
import SetList from './SetList';

class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			// making a copy of the json so that i don't edit that one
			deck: [],
			availableSpaces: 12,
			cardsOnBoard: [],
			completedSets: 0 
		};
		this.deal = this.deal.bind(this);
		this.createDeck = this.createDeck.bind(this);
		this.shuffleDeck = this.shuffleDeck.bind(this);
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
		const fullDeck = cards.map(([color, number, shape, pattern]) => ({color, number, shape, pattern}));


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
			deck: deck
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
					<Board spaces={this.state.availableSpaces} cards={this.state.cardsOnBoard}/>
					<SetList sets={this.state.completedSets}/>
				</div>
			</div>
		)
	}
}



export default Game