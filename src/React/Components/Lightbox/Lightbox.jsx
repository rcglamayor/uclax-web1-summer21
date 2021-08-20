import React, { useState } from 'react';
import styled from 'styled-components';

import Dark from './Dark.jsx';

const Lightbox = ({children, LightboxContent, width}) => {

    const [showLight, showLightUpdate] = useState(false);

    const toggleShowLight = () => {
        showLightUpdate(!showLight);
    }

    return (
        <LightboxStyled className='Lightbox' onClick={ toggleShowLight }>
            {children}
            {
                showLight &&
                <Dark showLightUpdate={showLightUpdate} width={ width }>
                    <LightboxContent />
                </Dark> 
            }
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    
`;