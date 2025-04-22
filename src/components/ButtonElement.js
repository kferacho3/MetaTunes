import styled from 'styled-components';
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#660099' : '#010606')} ;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '30px 30px')} ;
    color: ${({dark}) => (dark ? '#010606' : '#fff')} ;
    font-size = ${({fontBig}) => (fontBig ? '30px' : '16px')} ;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
}
`;

export const Button2 = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#660099' : '#010606')} ;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '30px 30px')} ;
    color: ${({dark}) => (dark ? '#010606' : '#fff')} ;
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
}
`;
export const Button1 = styled.a`
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