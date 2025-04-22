import React from 'react'
import { Button } from '../ButtonElement'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
    
} from './InfoElements'
function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }
const InfoSection = ({lightBg, id, imgStart, lightText,
headline, darkText, description,  buttonLabel, img, alt, primary, dark, dark2, too}) => {
    return (
        
          <InfoContainer lightBg={lightBg} id={id} >
          
        
          
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <TopLine lightText={lightText}>{lightText}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText} class='font2'><NewlineText text ={description}/></Subtitle>
                          <BtnWrap >
                              <Button to={too}
                            
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact={true}
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                          </BtnWrap>
                          
                        
                      </TextWrapper>
                      </Column1>


                      <Column2>
                      <ImgWrap>
                        <Zoom>
                        <Img src={img} alt={alt} className='container'/>
                        </Zoom>
                      </ImgWrap>
                      </Column2>
                      
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
              
        
    )
}

export default InfoSection
