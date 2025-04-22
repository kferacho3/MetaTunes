import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    margin-top: 75px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#010606')};

    @media screen and (max-width: 640px) {
        padding: 50px 0;
        height: 150vh;
        margin: auto;
        margin-top: 75px;
    }
`;

export const InfoContainer1 = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#660099')};

    @media screen and (max-width: 768px) {
        padding: 150px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        
        
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`;


export const TextWrapper = styled.div`
    max-width: 540;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.p`
    color: #660099;
    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform; uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size; 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 640px) {
        align-items: center;
		
		display:block;
			
		margin: auto;
    }
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right 0;
    
    @media screen and (max-width: 768px) {
        transform: scale(0.7) translateY(-300px);
        margin: auto;
         }
`;

export const Img1 = styled.img`
    width: 100%;
    height: ;
    
    margin: 0 0 10px 0;
    padding-right 0;
`;