import React from 'react'
import { FaDiscord, FaInstagram, FaTwitter , FaYoutube} from 'react-icons/fa';
import Popup from './Popup';
import { animateScroll as scroll} from 'react-scroll';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLink1,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
   
  } from './FooterElements';
import { useState} from 'react';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
   
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const handleClick1 = () => {
        window.open("https://discord.gg/swwnG3kpz5");
      };
      const handleClick2 = () => {
        window.open("https://twitter.com/MetaTunesNFT");
      };
      const handleClick3 = () => {
        window.open("https://www.instagram.com/metatunesnft/");
      };

      //handles timed popup by eliminating raapid popup (useeffect helps)
      


    return (
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>

              <FooterLinksWrapper>
                 <FooterLinkItems>
                    <FooterLinkTitle> About Us </FooterLinkTitle>
                        <FooterLink1 to='team'>Creators</FooterLink1>
                        <FooterLink1 to='theArts'>The Arts</FooterLink1>
                        <FooterLink1 to='howItWorks'>How it works</FooterLink1>
                        <FooterLink1 to='roadmap'>Roadmap</FooterLink1>  
                        
                        
                 </FooterLinkItems>
                 </FooterLinksWrapper>
            

              <FooterLinksWrapper >
                 <FooterLinkItems>
                    <FooterLinkTitle> Social Media </FooterLinkTitle>
                        <FooterLink onClick={handleClick1}>DISCORD</FooterLink>
                        <FooterLink onClick={handleClick2} target='_blank'>TWITTER</FooterLink>
                        <FooterLink onClick={handleClick3}  target='_blank'>INSTAGRAM</FooterLink>
                        <FooterLink to="">OTHER WORKS</FooterLink>
                 </FooterLinkItems>
                 </FooterLinksWrapper>
                 
                 <FooterLinksWrapper>
                 <FooterLinkItems>
                    <FooterLinkTitle> Start Now! </FooterLinkTitle>
                    <FooterLink to="/connectWallet">CONNECT YOUR WALLET</FooterLink>
                    <FooterLink onClick={() => setButtonPopup2(true)}>CONTACT</FooterLink>
                    <Popup trigger ={buttonPopup2} setTrigger = {setButtonPopup2}>
                        <h3>metatunesnft@gmail.com</h3>
                        </Popup>
                 </FooterLinkItems>
              </FooterLinksWrapper>

            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        TUNES
                    </SocialLogo>
                    <WebsiteRights>TUNES © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://discord.gg/swwnG3kpz5' target='_blank' aria-label='Discord'>
                            <FaDiscord />
                        </SocialIconLink>
                        <SocialIconLink href='https://twitter.com/MetaTunesNFT' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/metatunesnft/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube/>
                        </SocialIconLink>
                        
                        
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;



