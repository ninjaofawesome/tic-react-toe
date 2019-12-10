import React, { FunctionComponent } from 'react';

//components
import { StyledTableBlock } from './TableBlockStyles';

interface TableBlockProps {
	value: any;
	changeState(): any; 
}

const TableBlock: FunctionComponent<TableBlockProps> = ({ value, changeState}) => (
    <StyledTableBlock onClick={changeState}>{value}</StyledTableBlock>
);

export default TableBlock;
