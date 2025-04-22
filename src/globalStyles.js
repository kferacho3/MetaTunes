import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
	width: 100%;
	background: #fff;
	margin-top: 75px;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	align-items: center;
	@media screen and (max-width: 768px) {
		padding: 10px 15px;
		align-items: center;
	}
`;
export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Heading = styled.h2`
	font-size: 8rem;
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	text-shadow: 5px 5px #660099;
	width: ${({ width }) => (width ? width : '100%')};
	@media screen and (max-width: 640px) {
        font-size: 6rem;
    }
`;
export const TextContainer = styled.button`
	background-color: #660099;
	
	color: #fff;
	cursor: pointer;
	font-weight: 600;
	border-style: outset;
	height: 100%;
	width: 100%;
	z-index: 9999;
	&:hover {
		background-color: #112f4a;
		transition: background-color 0.2s ease-in;
	}
`;

export const TextWrapper = styled.span`
	
	color:  '#fff';
	font-size: 0.55rem;
	font-family: 'spaceregular';
	text-shadow: 1px 1px #000;
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	z-index: 9999;
	@media screen and (max-width: 640px) {
        font-size: .64rem;
    }
	
`;
export const TextWrapper2 = styled.span`
	
	color:  '#fff';
	font-size: 0.55rem;
	font-family: 'spaceregular';
	text-shadow: 1px 1px #000;
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	z-index: 9999;
	@media screen and (max-width: 640px) {
        font-size: .38rem;
    }
	
`;


export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ? '#000' : '#071c2f')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Row = styled.div`
	margin-top: 50px;	
	display: flex;
	
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
	@media screen and (max-width: 640px) {
		align-items: center;
		display: flex;
		
		margin: auto;
		margin-top: 30px;
		margin-bottom: 30px;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

export const Button = styled.button`
	border-radius: 4px;
	
	white-space: nowrap;
	padding: 10px 20px;

	margin-top: 50px;
	margin-bottom: 50px;
	font-size: 16px;
	background: #660099;
	outline: none;
	border: 2px solid #50446f;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	align-items: center;
	justify-content: center;

	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		color: #fff;
        background: #112f4a
	}
	@media screen and (max-width: 640px) {
		align-items: center;
		display: flex;
		
		margin: auto;
		margin-top: 30px;
		margin-bottom: 30px;
			
		}
`;
export const OtherBg = styled.div`
    position: absolute;

    top: 0;
    right: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const VideoBg = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const VideoBg1 = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
	border-radius: 50%;
    object-fit: cover;
    background: #232a34;
`;
export default GlobalStyle;