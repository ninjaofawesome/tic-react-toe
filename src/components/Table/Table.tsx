import React, { Component } from 'react';

// components
import TableBlock from '../TableBlock/TableBlock';
import {
	TableWrapper,
	GameBoard,
	GameStatusWrapper,
	GameStatus,
	ResetButton,
} from './TableStyles';

import {
	StyledO,
	StyledX,
} from '../../utils/constants';

// utils
import {
	findWinner,
	allBoxesClicked,
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

		this.setBoard = this.setBoard.bind(this);
		this.handleBoxClick = this.handleBoxClick.bind(this);
		this.gameStatus = this.gameStatus.bind(this);
		this.restartGame = this.restartGame.bind(this);
	}

	setBoard() {
		return (
			this.state.boxes.map((box, index) => (
				<TableBlock 
				   changeState={() => this.handleBoxClick(index)} 
				   value={this.state.boxes[index]}
				 />
			))
		)
	}

	handleBoxClick(index: any) {
	    // get current state of boxes
	    const boxes = this.state.boxes.slice();

	    // Get current state of history
	    let history = this.state.history;

	    // Stop the game if board contains winning combination
	    if (findWinner(boxes) || boxes[index]) {
	        return
	    }

	    // Stop the game if all boxes are clicked (filled)
	    if(allBoxesClicked(boxes) === true) {
	        return
	    }

	    // Mark the box either as 'x' or 'o'
	    boxes[index] = this.state.xPlayer ? 'X' : 'O'

	    // Add move to game history
	    history.push(this.state.xPlayer ? 'X' : 'O')

		// Update component state with new data
		this.setState({
	        boxes: boxes,
	        history: history,
	        xPlayer: !this.state.xPlayer
	    })
	}

	gameStatus() {
		const winner = findWinner(this.state.boxes);
		
	    if (winner) {
	        return (
	        	<GameStatus>{`The winner is: ${winner}!`}</GameStatus>
	        )
	    } else if(!winner && allBoxesClicked(this.state.boxes)) {
	        return (
	        	<GameStatus>{'Game drawn!'}</GameStatus>
	        )
	    } else {
	        return (
	        	<GameStatus>
	        	{this.state.xPlayer ? 
        			<span><StyledX>X</StyledX>, you're up!</span> : 
        			<span><StyledO>O</StyledO>, you're up!</span>}
	        	</GameStatus>
	        ) 
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
		    <TableWrapper>
		    	<GameBoard id='GameBoard'>
	    	      	{this.setBoard()}
		    	</GameBoard>
		    	<GameStatusWrapper>
		 			{this.gameStatus()}
		 		</GameStatusWrapper>
		 		<ResetButton onClick={() => this.restartGame()}>
		 			Restart
		 		</ResetButton>
		    </TableWrapper>
		)
	}
}

export default Table;
