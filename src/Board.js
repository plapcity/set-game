import React, { Component } from 'react';
import './Board.css';

class Board extends React.Component {
	constructor(props){
		super(props);

	}
	render(){
		// there's probably a better way to do this
		const spaces = Array(this.props.spaces).fill('space');
		return(
			<div className="board">
					{spaces.map((space, index) => <div key={index} className={space}/>)}
			
			</div>

		)
	}
}


export default Board