import React, { useState } from 'react';
import { Data } from './data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Img } from './accordionElements';
import './accordion.css'
import { VideoBg } from './accordionElements';
import vid2 from '../../videos/ab.mp4';
import { AccContainer } from './accordionElements';
import Zoom from 'react-medium-image-zoom'
//import vid2 from '../../gifs/ab.gif';
const AccordionSection = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  height: 100vh;
`;

const Container = styled.div`

  align-items: start;
  width: 70%;
  text-align: center;
  
  position: relative;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  @media screen and (max-width: 640px) {
    width: 100%;
    
}
`;

const Wrap = styled.div`
  background: #000;
  overflow: hidden;
  margin-top: 20px;
  
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  position: relative;
  h1 {
    text-align: center;
    padding: 2rem;
    text-shadow: 5px 5px #660099;
    font-size: 5rem;
    position: relative;
    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
  }
  span {
    margin-right: 1.5rem;
    position: relative;
  }


  
`;

const Dropdown = styled.div`
  background: #660099;
  color: #fff;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #660099;
  border-top: 1px solid #660099;
  position: relative;
  p {
    font-size: 1.5rem;
    width: 80%;
    
  }

  @media screen and (max-width: 768px) {
    p{
    font-size: 1rem;
    align-items: center;
		
		display:block;
			
		margin: auto;
    }
    
}
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
   <h1 class="h1">FAQ</h1>
    <AccContainer  id="faq" >
    
    <IconContext.Provider value={{ color: '#660099', size: '25px' }}>
    
    <VideoBg playsInline autoPlay loop muted src={vid2} type='video/mp4' />
        
  
        
        <Container class='border' >
        
          {Data.map((item, index) => {
            return (
              <>
              
                <Wrap class='border' onClick={() => toggle(index)} key={index} >
                  <h1 >{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown class = 'border'>
                    <p class = 'font'>{item.answer}</p>
                    
                    <div class='imgC'></div>
                    
                      <Zoom>
                    <Img src={item.img} />
                    </Zoom>
                    <p2 class='cap'>{item.caption}</p2>
                    
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      
    </IconContext.Provider>
    </AccContainer>
    </>
  );
};

export default Accordion;
