import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Layout/Header.jsx';
import Nav from './Layout/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <AppStyled>
                <Header />
                <Nav />
                <Main />
                <Footer />
            </AppStyled>
        </BrowserRouter>
    );
}

export default App;

const AppStyled = styled.div`
    .inset-container {
        border: solid 2px red;
        max-width: 1600px;

        margin-right: auto;
        margin-left: auto;
    }
`;