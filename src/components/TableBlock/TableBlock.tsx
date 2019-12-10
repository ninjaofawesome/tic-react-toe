import React, { FunctionComponent } from 'react';

//components
import { 
	StyledTableBlock,
	BlockPlaceholder,
} from './TableBlockStyles';

import {
	StyledO,
	StyledX,
} from '../../utils/constants';

interface TableBlockProps {
	value: any;
	changeState(): any;
	id: string; 
}

const TableBlock: FunctionComponent<TableBlockProps> = ({ value, changeState, id}) => (
    <StyledTableBlock onClick={changeState} id={id}>{value === null ? <BlockPlaceholder /> : value === 'X' ? <StyledX>{value}</StyledX> : <StyledO>{value}</StyledO>}</StyledTableBlock>
);

export default TableBlock;
