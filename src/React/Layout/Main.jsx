import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../Pages/Welcome/Welcome.jsx';
import Login from '../Pages/Login/Login.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Services from '../Pages/Services/Services.jsx';
import Homework from '../Homework/Homework.jsx';

const Main = () => {
    return (
        <MainStyled>
            <h1>Main Content</h1>
            <Switch>
                <Route path='/services'>
                    <Services />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/homework'>
                    <Homework />
                </Route>
                <Route path='/' exact>
                    <Welcome />
                </Route>
            </Switch>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    background-color: #aadbdb;
    padding: 20px;

    /* div {
        border: solid 2px red;
        padding: 20px;
    } */
`;