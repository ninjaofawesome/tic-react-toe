import React, { useState, useEffect} from 'react';


const Table: React.FC = () => {
	// this  will manage the state for X and O
	const [table, setTable] = useState([0,0,0, 0,0,0, 0,0,0]);

	// this will track the winners
	const [winner, setWinner] = useState([]);

	// this tracks the last number, being a 5 or a 3, randomly
	const [last, setLast] = useState(Math.random() > 0.5 ? 5 : 3);

	//  Todo:  if possible, refactor some of this out!  So verbose!
	useEffect(()=>{

       //checking winner row and col
       for (let i = 0; i <= 2; i++){
           const idx = (i % 3) * 3 

           //check row
           if ( (table[idx] + table[idx+1] + table[idx+2] )=== 9 || (table[idx] + table[idx+1] + table[idx+2] ) === 15){
               setWinner([idx,idx+1,idx+2])
               gameOver()
           }

           //check col
           if ((table[i] + table[i+3] + table[i+6] )=== 9 || (table[i] + table[i+3] + table[i+6] ) === 15){
               setWinner([i,i+3,i+6])
               gameOver()
           }
       }

       //checking winner diagonal
       if ((table[0] + table[4] + table[8] ) === 15 || (table[0] + table[4] + table[8] ) === 9 ){
           setWinner([0, 4, 8])
           gameOver()
       }

       if ((table[2] + table[4] + table[6] ) === 9 || (table[2] + table[4] + table[6] ) ===15){
           setWinner([2, 4, 6])
           gameOver()
       }

       // check if table completed
       if (table.indexOf(0) === -1){
           gameOver()
       }
       
	}, [table])
	
	return (
	    <div>
	        I am table
	    </div>
	);
}

export default Table;
