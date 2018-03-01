import React, { Component } from 'react';
import './Board.css';

import Card from './Card';

class Board extends React.Component {
	constructor(props){
		super(props);

	}
	render(){
		// there's probably a better way to do this
		const spaces = Array(this.props.spaces).fill('space');
		const cards = this.props.cards.map((card, index) => <Card key={index} card={card}/>)
		return(
			<div className="board">
					{spaces.map((space, index) => <div key={index} className={space}/>)}			
					{cards}
			</div>

		)
	}
}


export default Board