import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Layout/Header.jsx';
import Nav from './Layout/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </BrowserRouter>
    );
}

export default App;