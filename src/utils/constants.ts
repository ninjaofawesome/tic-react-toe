import styled from "styled-components";

// non-styling
export const initialBoardState: any[] = [null, null, null, null, null, null, null, null, null];

// constants
export const sizes = {
	small: '5px',
	medium: '10px',
	large: '20px',
	xlarge: '40px',
};

export const colors = {
	white: '#ffffff',
	black: '#141414',
	borderGray: '#e7e7e7',
	lightGray: '#d0d0d0',
	mediumGray: '#a1a1a1',
	darkGray: '#727272',
	purple: '#800080',
	green: '#009874',
};


export const StyledX = styled.span`
	color: ${colors.purple};
`;

export const StyledO = styled.span`
	color: ${colors.green};
`;
