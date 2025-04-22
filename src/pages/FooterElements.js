import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const FooterContainer = styled.footer`
    background-color: #101522;
    
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-context: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;
export const Wrapper = styled.div`
    font-color: #fff;
`;
export const FooterLinksWrapper = styled.div`
    display; flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        
    }
    @media screen and (max-width: 520px) {
    transform: scale(0.8) translateX(30px);
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        
        margin: 0;
        padding: 10px;
        width: 100%;
    }
    
`;

export const FooterLinkTitle = styled.div`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #660099;
        transition: 0.3s ease-in-out;
    }
`;

export const FooterLink1 = styled(LinkS)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #660099;
        transition: 0.3s ease-in-out;
    }
`;
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-driection: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
    
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    @media screen and (max-width: 520px) {
        transform: scale(0.8) translateX(20px);
        }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    fonts-size: 24px;
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
`;

export const VizIco = styled.img`
    
    align-items: center
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    display: flex;
    height: 250px;
    width: 250px;
    margin-bottom: 100px;
    transform: translate(90%, 30%)
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
    
`;

export const VizSet = styled.div`
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
        font-color: #fff;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    display: table-cell;
    vertical-align: middle
    gap: 75px;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        transform: scale(0.60);
        }
`;
