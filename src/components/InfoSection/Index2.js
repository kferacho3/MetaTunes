import React from 'react'
import {  Button2 } from '../ButtonElement'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { 
    InfoContainer1,
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
const InfoSection2 = ({lightBg, id, imgStart, topLine, lightText,
headline, darkText, description, description2,  img, alt, primary, dark, dark2,  tooo, buttonLabel1}) => {
    return (
        <>
          <InfoContainer1 lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <TopLine lightText={lightText}>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText} > text={description}{description2}</Subtitle>
                         
                          
                          <BtnWrap>
                              <Button2 to={tooo}
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact={true}
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}>{buttonLabel1}</Button2>
                          </BtnWrap>
                          
                      </TextWrapper>
                      </Column1>


                      <Column2>
                      <ImgWrap>
                        <Zoom>
                        <Img src={img} alt={alt} class='container'/>
                        </Zoom>
                      </ImgWrap>
                      </Column2>
                      
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer1>  
              <hr size= "10"/>
        </>
    )
}

export default InfoSection2