import styled from "styled-components";
import { sizes } from '../../utils/constants';

export const TableWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: 1px solid blue;
`;

export const GameBoard = styled.div`
	width: 300px;
	height: 300px;
	margin-top: ${sizes.medium};
	border: 1px solid green;
`;
