import React from 'react';
import styled from 'styled-components';

import Dark from './Dark.jsx';

const Lightbox = () => {

    return (
        <LightboxStyled className='Lightbox'>
            <Dark /> 
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    
`;