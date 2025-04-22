import styled from 'styled-components';
import { Row } from '../../globalStyles.js';
import Slider from 'react-slick';
import {Link as LinkS} from 'react-scroll';

export const CarouselImage = styled.img`
	width: 100%;
	height: 400px;
	
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	vertical-align: middle;
`;

export const ImageWrapper = styled(LinkS)`
	width: 100%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	height: 500px;
	overflow: hidden;
    border-radius: 1.5rem;
  
    
   

	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
`;

export const ButtonContainer = styled(Row)`
	
	& svg {
		
		margin: 0 1.5rem;
		cursor: pointer;
	}
	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
	
`;

export const ReviewSlider = styled(Slider)`
	
	.slick-track {
		display: flex;
		padding: 0px;
		z-index: 99999;
	}
	.slick-slide {
		display: flex;
		
		justify-content: center;
		margin-bottom: 1;
		outline: none;
		z-index: 99999;
	}
	.slick-list {
		overflow-x: hidden;
		z-index: 99999;
	}
	@media screen and (max-width: 640px) {
		overflow-x: hidden;
		
		display:block
		
		.slick-track {
		align-items: center;
		
		display:block
			
		margin: auto;	
			
			
		}
		.slick-slide {
			align-items: center;
		
		display:block
			
		margin: auto;
		}
	}
`;

export const CardButton = styled.button`
	background-color: #8e81b1;
	font-size: 1.3rem;
	padding: 5px 10px;
	color: #fff;
	cursor: pointer;
	width: 100%;
	font-weight: 600;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0 0 10px 10px;
	&:hover {
		background-color: #112f4a;
		transition: background-color 0.2s ease-in;
	}
`;

export const ExamplesCard = styled.div`
    background: #ADD8E6;
    
    display: inline-block;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    border-radius: 25px;
    height: 500px;
	width: 100%;
    padding: 65px;
	
    transitions: all 0.2s ease-in-out;
   
    &:hover {
        transform: scale(1.02);
        background: #ADD8A1;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;


export const CarContainer = styled.div`
    background: #fff;
    margin-top: 75px;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100%;
    position: relative;
    z-index: 1;

	
	
`;

export const CarBg = styled.div`
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
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;