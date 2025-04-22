import React, { useState } from 'react';
//import Video from '../../videos/video.mp4';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from './SynthData';
import { Row, Heading, TextWrapper, TextWrapper2, Button, Container,  TextContainer} from '../../globalStyles.js';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import {

	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	
	CarContainer,
	
} from './CarouselElements';


const Carousel = () => {
	let history = useHistory();

  const redirect = () => {
    history.push('/')
  }

 
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<>
		<Heading width="auto" >
					THE arts
				</Heading>
		<Container id="theArts" >
			
		
	   
		
			<Row justify="space-between" margin="2rem" wrap="wrap">
				
				<ButtonContainer>
					<IconContext.Provider value={{ size: '4rem', color: '#660099'}}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
						
					</IconContext.Provider>
				</ButtonContainer>
			</Row>
			
			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<Zoom>
						<CarouselImage src={el.image} />
						</Zoom>

						<TextContainer>
						<TextWrapper size = "0.65rem" margin="0.4rem 0 0" weight="bold">
						{el.title}
						</TextWrapper>
						</TextContainer>

						<TextContainer>
						<TextWrapper2  margin="0.7rem"  color="#4f4f4f" font-family= 'trenchthin'>
							{el.description}
						</TextWrapper2>
						</TextContainer>
						
					</ImageWrapper>
				))}
			</ReviewSlider>
			
			<Button  to='theArts'>
			<button onClick={redirect}>FEATURED COLLECTION</button>
			</Button>
			
		</Container>
		</>
	);
};

export default Carousel;