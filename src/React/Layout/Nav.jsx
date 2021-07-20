import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
            <a href="/homework">Homework</a>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #005050;
    color: #fff;
    padding: 10px;
    text-align: center;

    a {
        display: inline-block;
        background-color: teal;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        margin: 0px 10px;

        text-decoration: none;
        text-transform: uppercase;

        &:hover {
            color: teal;
            background-color: #fff;
        }
    }
`;