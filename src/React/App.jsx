import React from 'react';
import Header from './Layout/Header.jsx';
import Nav from './Layout/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export default App;