import React, { Component } from 'react';

// components
import TableBlock from '../TableBlock/TableBlock';

// utils
import {
	findWinner,
	allBoxesClicked,
	chunkyArray,
} from '../../utils/helperFunctions';

import { initialBoardState } from '../../utils/constants';

interface TableState {
	boxes: any[];
	history: any[];
	xPlayer: boolean;
}

class Table extends Component<{}, TableState>  {
	constructor(props: any) {
		super(props)

		this.state = {
			boxes: initialBoardState,
			history: [],
			xPlayer: true,
		};

		this.handleBoxClick = this.handleBoxClick.bind(this);
		this.gameStatus = this.gameStatus.bind(this);
		this.restartGame = this.restartGame.bind(this);
	}


	handleBoxClick(index: any) {
		console.log('index', index);
	    // get current state of boxes
	    const boxes = this.state.boxes.slice();
	    console.log('boxes', boxes)

	    // Get current state of history
	    let history = this.state.history;
	    console.log('history', history)

	    // Stop the game if board contains winning combination
	    if (findWinner(boxes) || boxes[index]) {
	        return
	    }

	    // Stop the game if all boxes are clicked (filled)
	    if(allBoxesClicked(boxes) === true) {
	        return
	    }

	    // Mark the box either as 'x' or 'o'
	    boxes[index] = this.state.xPlayer ? 'x' : 'o'

	    // Add move to game history
	    history.push(this.state.xPlayer ? 'x' : 'o')

		// Update component state with new data
		this.setState({
	        boxes: boxes,
	        history: history,
	        xPlayer: !this.state.xPlayer
	    })
	}

	gameStatus() {
		// Get winner (if there is any)
		const winner = findWinner(this.state.boxes)

		// Are all boxes checked?
		const isFilled = allBoxesClicked(this.state.boxes)

	    if (winner) {
	        // If winner exists, create status message
	        return `The winner is: ${winner}!`
	    } else if(!winner && isFilled) {
	        // If game is drawn, create status message
	        return 'Game drawn!'
	    } else {
	        // If there is no winner and game is not drawn, ask the next player to make a move
	        return `It is ${(this.state.xPlayer ? 'x' : 'o')}'s turn.`
	    }
	}

	restartGame() {
		this.setState({
			boxes: initialBoardState,
			history: [],
			xPlayer: true,
		})
	}

	render() {
		return (
		    <div>
		    	<div className="board">
		    	    <div className="board-row">
		    	       <TableBlock 
		    	          changeState={() => this.handleBoxClick(0)} 
		    	          value={this.state.boxes[0]}
		    	        />
		    	        <TableBlock 
		    	           changeState={() => this.handleBoxClick(1)} 
		    	           value={this.state.boxes[1]}
		    	         />
		    	        <TableBlock 
		    	           changeState={() => this.handleBoxClick(2)} 
		    	           value={this.state.boxes[2]}
		    	         />   
		    	    </div>
		    	    <div className="board-row">
		    	       <TableBlock 
		    	          changeState={() => this.handleBoxClick(3)} 
		    	          value={this.state.boxes[3]}
		    	        />
		    	        <TableBlock 
		    	           changeState={() => this.handleBoxClick(4)} 
		    	           value={this.state.boxes[4]}
		    	         />
		    	        <TableBlock 
		    	           changeState={() => this.handleBoxClick(5)} 
		    	           value={this.state.boxes[5]}
		    	         />
		    	    </div>

		    	    <div className="board-row">
		    	       <TableBlock 
		    	          changeState={() => this.handleBoxClick(6)} 
		    	          value={this.state.boxes[6]}
		    	        />
		    	        <TableBlock 
		    	           changeState={() => this.handleBoxClick(7)} 
		    	           value={this.state.boxes[7]}
		    	         />
		    	        <TableBlock 
		    	           changeState={() => this.handleBoxClick(8)} 
		    	           value={this.state.boxes[8]}
		    	         />
		    	    </div>
		    	</div>
		 		{this.gameStatus()}
		    </div>
		)
	}
}

export default Table;
