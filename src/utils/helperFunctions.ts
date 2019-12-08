// checks to see if the game is won
export const findWinner = (winner: any) => winner;

// checks to see if the boxes are clicked
export const allBoxesClicked = (boxes: any) => boxes;

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