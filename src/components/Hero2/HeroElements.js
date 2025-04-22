
import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    
    :before {
        content: '';
        position; absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
        z-index: 2;

    }
`;

export const HeroContainer2 = styled.div`
    background: #0c0c0c;
  
    padding: 0 30px;
    height: 100%;
    z-index: 1;

`;

export const HeroBg = styled.div`
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

export const HeroContent = styled.div`
    z-index = 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(3px);

`;

export const HeroH1 = styled.h1`
color: #fff;
font-size: 8rem;
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -80%);
text-shadow: 5px 5px #660099;

z-index: 99999;
  
text-align: center;
text-FaAlignCenter: FaCentercode;

@media screen and (max-width: 768px) {
    font-size: 48px;
}

@media screen and (max-width: 480px) {
        font-size: 40px;

		transform: translate(-50%, -100%);
    }
`;

export const HeroP = styled.p`
    fontWeight: bold;
    margin-top: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 75%);
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    max-width: 600px;
    text-shadow: 5px 2px #660099;
    z-index: 99999;
    

    
@media screen and (max-width: 768px) {
        font-size: 24px;
}
    
@media screen and (max-width: 480px) {
            font-size: 16px;   
}`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 150%);
    flex-direction: column;
    align-items: center;
    z-index: 99999;
    @media screen and (max-width: 640px) {
        align-items: center;
		display:block;
		
		margin: auto;
        margin-top: 175px;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const Button4 = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#660099' : '#010606')} ;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '30px 30px')} ;
    color: ${({dark}) => (dark ? '#fff' : '#fff')} ;
    font-size = ${({fontBig}) => (fontBig ? '30px' : '16px')} ;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    z-index: 99999;
&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    color: ${({dark}) => (dark ? '#660099' : '#fff')};
}
`;