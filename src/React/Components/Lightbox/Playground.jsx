import React from 'react';
import styled from 'styled-components';

import Lightbox from './Lightbox.jsx';

const Playground = () => {

    const LightboxContent = () => {
        return (
            <div>Content for the lightbox.</div>
        );
    }

    return (
        <PlaygroundStyled className='Playground'>
            <h2>Playground</h2>
            <Lightbox LightboxContent={ LightboxContent }>
                LIGHTBOX CONTENT
            </Lightbox>
        </PlaygroundStyled>
    );
}

export default Playground;

const PlaygroundStyled = styled.div`
    
`;