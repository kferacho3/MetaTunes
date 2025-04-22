import styled from "styled-components";

export const TeamContainer = styled.div`
    background: #0c0c0c;
    margin-top: 75px;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100%;
    position: relative;
    z-index: 1;
 
`;

export const TeamBg = styled.div`
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
    margin-bottom: 25px;
`;

export const TeamImage = styled.img`
	width: 100%;
	height: 400px;
	
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	vertical-align: middle;
`;