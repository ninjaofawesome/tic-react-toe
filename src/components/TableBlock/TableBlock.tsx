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
}

const TableBlock: FunctionComponent<TableBlockProps> = ({ value, changeState}) => (
    <StyledTableBlock onClick={changeState}>{value === null ? <BlockPlaceholder /> : value === 'X' ? <StyledX>{value}</StyledX> : <StyledO>{value}</StyledO>}</StyledTableBlock>
);

export default TableBlock;
