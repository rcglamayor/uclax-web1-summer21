import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <h2>Spa Sanctuary</h2>
            <h3>A SPA for every occassion</h3>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: teal;
    padding: 20px;
    text-align: center;
`;