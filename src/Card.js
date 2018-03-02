import React, { Component } from 'react';
import './Card.css';

// import wave from './shape-wave.svg'
// import oval from './shape-oval.svg'
// import diamond from './shape-diamond.svg'


class Card extends React.Component {
	renderShapes(){
		const shapes = [];
		const card = this.props.card;
		for (var i = 0; i < card.number; i++) {
			shapes.push(<img className="card-img" key={i} src={`shape-${card.shape}.svg`}/>)
		}
		return shapes;
	}

	render(){
		const card = this.props.card;
		const selected = this.props.selected;
		const cardClasses = `card ${card.color} ${selected ? 'selected' : ''}`



		return(
			<div onClick={this.props.onClick} className={cardClasses}>
				<span></span><br/>
				{this.renderShapes()}
			
				
				<span>{card.pattern}</span><br/>
			</div>
		)
	}
}

export default Card;