import styled from "styled-components";
import { colors } from '../../utils/constants';

export const StyledTableBlock = styled.button`
	display: inline-block;
	width: 100px;
	height: 100px;	
	border: 1px solid ${colors.borderGray};
	background-color: ${colors.white};
	color: ${colors.black};
	font-size: 50px;
	line-height: 100px;
	font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
`;

export const BlockPlaceholder = styled.span`
	height: 50px;
	width: 50px;
	background: transparent;
	display: inline-block;
`;

export const StyledX = styled.span`
	color: ${colors.purple};
`;

export const StyledO = styled.span`
	color: ${colors.green};
`;
