import React, { Component } from 'react';
import './Board.css';

class Board extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="board">
			{this.props.spaces}
			</div>

		)
	}
}


export default Board