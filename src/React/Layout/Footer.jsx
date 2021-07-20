import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return <FooterStyled>Spa Sanctuary &copy; 2021</FooterStyled>
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #005050;
    color: #fff;
    padding: 10px;
    text-align: center;
`;