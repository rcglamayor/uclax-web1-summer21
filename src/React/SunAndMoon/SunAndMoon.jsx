import React, { useState } from 'react';
import styled from 'styled-components';

const SunAndMoon = () => {

    const [imageState, imageStateUpdate] = useState('/img/sun.png');

    const handleOnMouseOver = () => {
        console.log('mousing over');
        imageStateUpdate('/img/moon.png');
    }
    const handleOnMouseOut = () => {
        console.log('mousing out');
        imageStateUpdate('/img/sun.png');
    }

    return (
        <SunAndMoonStyled className='SunAndMoon'>
            <h2>Sun & Mooooooon</h2>
            <img 
                src={ imageState }
                alt="Sun"
                onMouseOver={ handleOnMouseOver }
                onMouseOut={ handleOnMouseOut }
            />
        </SunAndMoonStyled>
    );
}

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    background-color: #9998f0;
    text-align: center;
    padding-bottom: 50px;

    h2 {
        background-color: #e3c0ff;
    }
`;