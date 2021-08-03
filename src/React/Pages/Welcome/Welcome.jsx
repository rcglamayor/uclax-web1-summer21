import React from 'react';
import styled from 'styled-components';

import Playground from '../../Components/Lightbox/Playground.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';
import Staff from './Staff/Staff.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <h1>Welcome page</h1>
            <Playground />
            <Slideshow />
            <Tabbed />
            <Staff />
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;