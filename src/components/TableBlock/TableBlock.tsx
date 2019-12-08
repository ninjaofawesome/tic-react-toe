import React, { FunctionComponent } from 'react';

interface TableBlockProps {
	value: any;
	changeState(): any; 
}

const TableBlock: FunctionComponent<TableBlockProps> = ({ value, changeState}) => {
	return (
	    <button onClick={changeState}>
	        {value}
	    </button>
	);
}

export default TableBlock;
