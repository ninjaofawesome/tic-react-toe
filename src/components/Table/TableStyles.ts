import styled from "styled-components";
import { sizes, colors } from '../../utils/constants';

export const TableWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const GameBoard = styled.div`
	width: 300px;
	height: 300px;
	margin: ${sizes.medium} 0;
	border: 2px solid ${colors.darkGray};
	background-color: ${colors.white};
`;

export const GameStatusWrapper = styled.div`
	width: 100%;
	height: auto;
	margin: ${sizes.large} 0 ${sizes.medium} 0;
`;

export const GameStatus = styled.span`
	font-weight: 700;
`;


export const ResetButton = styled.button`
	font-size: ${sizes.large};
	font-weight: 700;
	width: 300px;
	margin-top: ${sizes.medium};
	background-color: ${colors.purple};
	color: ${colors.white};
	border-radius: ${sizes.small}
	padding: ${sizes.small} 0;
`;
