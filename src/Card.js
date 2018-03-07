import React, { Component } from 'react';
import './Card.css';


class Card extends React.Component {
	renderShapes(){
		const shapes = [];
		const card = this.props.card;
		const shapeIcons = {
			wavesolid: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>wave solid</title><path d="M399.43,180.24c-.11,57.12-45.69,104.42-102.81,105.15-27.23.35-59.42-6.38-96.67-24.78-68.33-33.75-119.86-28.24-154.69-11.79C24.47,258.63.57,243,.57,220v0c0-57.21,45.62-104.71,102.82-105.36,27.23-.3,59.41,6.44,96.56,24.79,68.33,33.75,119.76,28.23,154.63,11.79,20.89-9.86,44.9,5.86,44.85,29Z"/></svg>, 
			wavestriped: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>wave striped</title><path d="M367.56,148.21a30.38,30.38,0,0,0-13.09,3,138.92,138.92,0,0,1-59.85,13c-26.83,0-58.36-6.84-94.7-24.79s-67.92-24.8-94.77-24.8H103.6C46.4,115.28,1,162.78,1,220v0A31.6,31.6,0,0,0,32.31,251.8a30.36,30.36,0,0,0,13.06-3,138.6,138.6,0,0,1,59.85-13c26.85,0,58.42,6.84,94.75,24.79s67.86,24.8,94.66,24.8l1.78,0c57.12-.73,102.59-48,102.59-105.15v-.07A31.76,31.76,0,0,0,367.56,148.21ZM302,174c3.36-.15,6.7-.4,10-.75V273.9a97.56,97.56,0,0,1-10,1.26Zm17-1.67q4-.63,8-1.46v98.94c-2.62.95-5.29,1.79-8,2.5ZM335,169q5.07-1.37,10-3.09V261a91.93,91.93,0,0,1-10,5.51Zm-115-9.84q4.51,1.74,9,3.28v99.94c-3-1.12-6-2.33-9-3.59Zm16,5.57c3.35,1,6.69,2,10,2.88V268.05q-5-1.44-10-3.17Zm17,4.6c3,.69,6,1.28,9,1.83V272c-3-.6-6-1.3-9-2.06Zm16,3q5,.74,10,1.18V274.6c-3.3-.34-6.64-.79-10-1.33Zm-73-23.68v99.07q-4.51-2.07-9-3.94V144.36c2.83,1.29,5.66,2.61,8.52,4Zm-58-20.55c3,.6,6,1.3,9,2.06V230.73c-3-.68-6-1.28-9-1.82Zm-7,99.7q-5-.73-10-1.19V125.45c3.3.34,6.64.79,10,1.34ZM154,132c3.31,1,6.65,2,10,3.18V235.35q-5-1.57-10-2.89Zm17,5.69c3,1.12,6,2.33,9,3.6v99.62q-4.51-1.74-9-3.28Zm-98-7.56q3.93-1.42,8-2.49v100q-4,.63-8,1.45ZM65,231q-5.07,1.35-10,3.07V139a91.93,91.93,0,0,1,10-5.51ZM88,126.11a92.28,92.28,0,0,1,10-1.25V226c-3.36.15-6.7.39-10,.74ZM22,174.5a95.86,95.86,0,0,1,10-15V241.8a21.53,21.53,0,0,1-10-2.62Zm-7,16.6v42.14l.24.35A21.41,21.41,0,0,1,10.57,220,96.35,96.35,0,0,1,15,191.1Zm26,48.67c-.33.16-.66.3-1,.44V150.79a96.32,96.32,0,0,1,8-6.91V236.7Q44.46,238.14,41,239.77Zm64-14V125h.17c2.58,0,5.2-.29,7.83-.15V226c-2.62-.12-5.24-.2-7.83-.2Zm99,25.64V152.4c3,1.37,6,2.69,9,3.93v99.38c-2.86-1.3-5.74-2.64-8.62-4.06Zm82,23.68V174c2.91.15,5.8.25,8.67.25H295V275.4h-.39C291.77,275.41,288.89,275.3,286,275.14Zm66-19V163.25q3.47-1.41,6.85-3c.38-.18.76-.35,1.15-.5V249c1.05-1,2.09-1.93,3.09-2.92l-.85.93A96.42,96.42,0,0,1,352,256.1Zm15.34-14.83q.35-.47.66-.93V158.22a21.41,21.41,0,0,1,10,2.66v64.63A95.69,95.69,0,0,1,367.34,241.27ZM389,180.22a95.19,95.19,0,0,1-4,28.7v-42a21.37,21.37,0,0,1,4,13.22Z"/></svg>,
			waveopen: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>wave open</title><path d="M105.17,124.62c28,0,58.43,8,90.35,23.76,34.69,17.14,68,25.83,99.15,25.83a149.32,149.32,0,0,0,64.18-14,20.81,20.81,0,0,1,8.93-2,21.9,21.9,0,0,1,21.65,21.95v.06A95.5,95.5,0,0,1,362.24,247a92.88,92.88,0,0,1-65.75,28.4l-1.88,0c-28,0-58.32-8-90.23-23.76-34.7-17.14-68.08-25.83-99.21-25.83a149,149,0,0,0-64.18,14,20.66,20.66,0,0,1-8.89,2A21.7,21.7,0,0,1,10.57,220,95.54,95.54,0,0,1,37.7,153.07a92.64,92.64,0,0,1,65.8-28.44h1.67m0-10h-1.78C46.19,115.28.57,162.78.57,220v0A31.77,31.77,0,0,0,32.1,251.8a30.76,30.76,0,0,0,13.16-3,138.91,138.91,0,0,1,59.9-13c26.86,0,58.45,6.84,94.79,24.79s67.87,24.8,94.66,24.8l2,0c57.12-.73,102.7-48,102.81-105.15v-.07a31.91,31.91,0,0,0-31.65-32,30.85,30.85,0,0,0-13.2,3,139.17,139.17,0,0,1-59.91,13c-26.82,0-58.39-6.84-94.72-24.79s-67.93-24.8-94.78-24.8Z"/></svg>,
			ovalsolid: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>oval solid</title><rect y="110" width="400" height="180" rx="90" ry="90"/></svg>,
			ovalstriped: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>oval striped</title><path d="M310,110H90A90,90,0,0,0,0,200H0a90,90,0,0,0,90,90H310a90,90,0,0,0,90-90h0A90,90,0,0,0,310,110Zm28,15.07a79.14,79.14,0,0,1,10,4.55V270.38a79.14,79.14,0,0,1-10,4.55Zm-7,152.11a80.52,80.52,0,0,1-10,2.05V120.77a80.52,80.52,0,0,1,10,2ZM355,133.9a80.51,80.51,0,0,1,9,7.13V259a80.51,80.51,0,0,1-9,7.13ZM120,120h9V280h-9Zm-8,160h-9V120h9Zm24-160h10V280H136Zm18,0h10V280H154Zm16,0h9V280h-9Zm16,0h10V280H186Zm18,0h10V280H204Zm17,0h9V280h-9Zm15,0h10V280H236Zm18,0h10V280H254Zm17,0h9V280h-9Zm17,0h9V280h-9ZM36,141a80.51,80.51,0,0,1,9-7.13V266.1A80.51,80.51,0,0,1,36,259Zm16-11.41a79.14,79.14,0,0,1,10-4.55V274.93a79.14,79.14,0,0,1-10-4.55Zm17-6.8a80.52,80.52,0,0,1,10-2V279.23a80.52,80.52,0,0,1-10-2.05ZM12,182.29v35.42a79.41,79.41,0,0,1,0-35.42Zm6,52.56v-69.7a80.27,80.27,0,0,1,10-15.64v101A80.27,80.27,0,0,1,18,234.85Zm68,45V120.1c1.33-.06,2.66-.1,4-.1h6V280H90C88.66,280,87.33,280,86,279.9Zm218,.1V120h6c1.34,0,2.67,0,4,.1V279.9c-1.33.06-2.66.1-4,.1Zm68-29.51v-101a80.27,80.27,0,0,1,10,15.64v69.7A80.27,80.27,0,0,1,372,250.49Zm16-32.78V182.29a79.41,79.41,0,0,1,0,35.42Z"/></svg>,
			ovalopen: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>Oval open</title><path d="M310,120a80,80,0,0,1,0,160H90a80,80,0,0,1,0-160H310m0-10H90A90,90,0,0,0,0,200H0a90,90,0,0,0,90,90H310a90,90,0,0,0,90-90h0a90,90,0,0,0-90-90Z"/></svg>,
			diamondsolid: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>diamond solid</title><polygon points="400 200 200 339.95 0 200 200 60.05 400 200"/></svg>,
			diamondstriped: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>diamond striped</title><polygon points="308 135.62 301 130.72 301 269.28 308 264.38 308 135.62"/><polygon points="325 147.52 318 142.62 318 257.38 325 252.48 325 147.52"/><polygon points="395 196.5 388 191.6 388 208.4 395 203.5 395 196.5"/><polygon points="378 184.6 370 179.01 370 220.99 378 215.4 378 184.6"/><polygon points="360 172.01 353 167.11 353 232.89 360 227.99 360 172.01"/><polygon points="214 330.15 221 325.26 221 74.74 214 69.84 214 330.15"/><polygon points="291 123.73 283 118.13 283 281.87 291 276.27 291 123.73"/><polygon points="12 191.6 5 196.5 5 203.5 12 208.4 12 191.6"/><polygon points="238 86.64 231 81.74 231 318.26 238 313.36 238 86.64"/><polygon points="256 99.23 248 93.64 248 306.36 256 300.76 256 99.23"/><polygon points="273 111.13 266 106.23 266 293.77 273 288.87 273 111.13"/><polygon points="343 160.11 335 154.52 335 245.48 343 239.89 343 160.11"/><polygon points="134 106.23 127 111.13 127 288.87 134 293.77 134 106.23"/><polygon points="152 93.64 144 99.23 144 300.76 152 306.36 152 93.64"/><polygon points="169 81.74 162 86.64 162 313.36 169 318.26 169 81.74"/><polygon points="186 69.84 179 74.74 179 325.26 186 330.15 186 69.84"/><polygon points="204 62.85 200 60.05 196 62.85 196 337.15 200 339.95 204 337.15 204 62.85"/><polygon points="30 179.01 22 184.6 22 215.4 30 220.99 30 179.01"/><polygon points="47 167.11 40 172.01 40 227.99 47 232.89 47 167.11"/><polygon points="117 118.13 109 123.73 109 276.27 117 281.87 117 118.13"/><polygon points="65 154.52 57 160.11 57 239.89 65 245.48 65 154.52"/><polygon points="99 130.72 92 135.62 92 264.38 99 269.28 99 130.72"/><polygon points="82 142.62 75 147.52 75 252.48 82 257.38 82 142.62"/><path d="M200,72.25,382.56,200,200,327.75,17.44,200,200,72.25m0-12.2L0,200,200,340,400,200,200,60.05Z"/></svg>,
			diamondopen: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>diamond open</title><path d="M200,72.25,382.56,200,200,327.75,17.44,200,200,72.25m0-12.2L0,200,200,340,400,200,200,60.05Z"/></svg>
		}
		for (var i = 0; i < card.number; i++) {
			shapes.push(shapeIcons[card.shape+card.pattern]);
		}
		return shapes;
	}

	render(){
		const card = this.props.card;
		const selected = this.props.selected;
		const cardClasses = `card ${card.color} ${selected ? 'selected' : ''}`

		return(
			<div onClick={this.props.onClick} className={cardClasses}>
				{this.renderShapes()}
			</div>
		)
	}
}

export default Card;