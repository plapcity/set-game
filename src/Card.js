import React, { Component } from 'react';
import './Card.css';


class Card extends React.Component {
	render(){
		const card = this.props.card;
		const cardClasses = `card ${card.color}`
		return(
			<span className={cardClasses}>
				<span>{card.color}</span><br/>
				<span>{card.number}</span><br/>
				<span>{card.shape}</span><br/>
				<span>{card.pattern}</span><br/>
			</span>
		)
	}
}

export default Card;