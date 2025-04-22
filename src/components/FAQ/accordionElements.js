import styled from 'styled-components';
export const AccContainer = styled.div`
    margin-top: 75px;
    
    background: #0c0c0c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 160vh;
    width: 100%;
    overflow: scroll;
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

export const AccCarBg = styled.div`
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

export const Img = styled.img`
height: 100%;
width: 100%;
justify-content: center;
align-items: center;
    margin: 0 0 10px 0;
    padding-right 0;
    @media screen and (max-width: 768px) {
        height: 300px;
width: 100%;
    }
`;

export const AccH1 = styled.h1`
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
    font-size: 40px;
}

@media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;