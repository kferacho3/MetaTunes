import React, {useState} from 'react';

import Video2 from '../../videos/fb.mp4';
//import Video2 from '../../gifs/fb.gif';
//import Marquee from 'react-fast-marquee';

import h0 from '../../modes/hh0.png';
import h1 from '../../modes/hh1.png';
import h2 from '../../modes/hh2.png';
import h3 from '../../modes/hh3.png';
import h4 from '../../modes/hh4.png';
import h5 from '../../modes/hh5.png';
import h6 from '../../modes/hh6.png';
import h7 from '../../modes/hh7.png';
import h8 from '../../modes/hh8.png';
import h9 from '../../modes/hh9.png';
import h10 from '../../modes/hh10.png';
import h11 from '../../modes/hh11.png';
import h12 from '../../modes/hh12.png';
import h13 from '../../modes/hh13.png';
import h14 from '../../modes/hh14.png';
import h15 from '../../modes/hh15.png';
import h16 from '../../modes/hh16.png';
import h17 from '../../modes/hh17.png';
import h18 from '../../modes/hh18.png';
import h19 from '../../modes/hh19.png';

import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
    Button4
} from './HeroElements';

import './Hero2.css';

function HeroSection1() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }
    return (
        
        <HeroContainer id={'home'}>
            <HeroBg>
            <HeroH1> Meta · Tunes </HeroH1>
                <HeroP style={{fontWeight: "bold"}}>
                    MUSIC ENVISIONED BY YOU, BROUGHT TO LIFE!
                </HeroP>
                <HeroBtnWrapper>
                    <Button4 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    href = 'https://discord.gg/swwnG3kpz5'
                    target='_blank' 
                    //onclick="openInNewTab('https://discord.gg/UaKAS7hf');"
                    primary = 'true'
                    dark = 'true'
                    fontBig = 'true'>
                    
                        GET WHITELISTED NOW! {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button4>
                </HeroBtnWrapper>
                <VideoBg playsInline autoPlay loop muted src={Video2} type='video/mp4' />
            </HeroBg>
            
        <div class = "marquee">
        
         <ul class = "marquee-content">
            <li class="image_wrapper">
              <img src={h0} alt="" />
            </li>
            <li className="image_wrapper">
              <img src={h1} alt="" />
            </li> 
            <li className="image_wrapper">
              <img src={h2} alt="" />
            </li>
            <li className="image_wrapper">
              <img src={h3} alt="" />
            </li>
            <li class ="image_wrapper">
              <img src={h4} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h5} alt="" />
            </li>
            <li className="image_wrapper">
              <img src={h6} alt="" />
            </li>
            <li className="image_wrapper">
              <img src={h7} alt="" />
            </li>
            <li className="image_wrapper">
              <img src={h8} alt="" />
            </li>
            <li className="image_wrapper">
              <img src={h9} alt="" />
            </li>
            <li className="image_wrapper">
              <img src={h10} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h11} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h12} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h13} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h14} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h15} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h16} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h17} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h18} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h19} alt="" />
            </li>
            <li class="image_wrapper">
              <img src={h0} alt="" />
            </li>
            <li className="image_wrapper">
              <img src={h1} alt="" />
            </li> 
            <li className="image_wrapper">
              <img src={h2} alt="" />
            </li> 
        </ul>
        
      </div>
      
      </HeroContainer>
    );
}

export default HeroSection1;
