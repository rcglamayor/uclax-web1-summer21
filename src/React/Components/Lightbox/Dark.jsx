import React from 'react';
import styled from 'styled-components';

import Light from './Light.jsx';

const Dark = () => {

    return (
        <DarkStyled className='Dark'>
            <Light /> 
        </DarkStyled>
    );
}

export default Dark;

const DarkStyled = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);

    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
`;