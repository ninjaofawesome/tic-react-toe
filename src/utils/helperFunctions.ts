// checks to see if the game is won
export const findWinner = (boxes: any) => {
	// Array with winning combinations
	const rows = [
	    [0, 1, 2],
	    [3, 4, 5],
	    [6, 7, 8],
	    [0, 3, 6],
	    [1, 4, 7],
	    [2, 5, 8],
	    [0, 4, 8],
	    [2, 4, 6]
	]

	// Iterate over array with winning combinations
	for (let i = 0; i < rows.length; i++) {
	    const [a, b, c] = rows[i]

	    // Check if the game board contains winning combination
	    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
	        // Return the winner ('x' or 'o')
	        return boxes[a]
	    }
	}

	// Otherwise do nothing
	return null
};

// checks to see if the boxes are clicked
export const allBoxesClicked = (boxes: any) => {
	// Declare variable to store number of clicked boxes.
	let count = 0

	// Iterate over all boxes
	boxes.forEach((item: any) => {
	    // Check if box is clicked (not null)
	    if (item !== null) {
	        // If yes, increase the value of count by 1
	        count++
	    }
	})

	// Check if all boxes are clicked (filled)
	return count === 9 ? true : false;
};

// splits up array for forming table body
export const chunkyArray = (array: any[], size: number) => {
	const chunked_arr = [];
	let copied = [...array];
	const subArrNum = Math.ceil(copied.length / size); 
	for (let i = 0; i < subArrNum; i++) {
	   chunked_arr.push(copied.splice(0, size));
	}
	return chunked_arr;
};