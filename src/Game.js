import React, { Component } from 'react';
import Deck from './Deck';
import Board from './Board';
import INITIALDECK from './deck.json'

class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			deck: INITIALDECK,
			availableSpaces: 12 
		};
	}

	// TODO: move cartesian function here and create new deck for each new game instead of loading from a hardcoded json

	render(){
		return(
			<div className="game">
				<h1>ReSet</h1>
				<Deck deck={this.state.deck} />
				<Board spaces={this.state.availableSpaces}/>
			</div>
		)
	}
}



export default Game