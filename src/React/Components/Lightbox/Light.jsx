import React, { useMemo } from 'react';
import styled from 'styled-components';

import CloseButton from 'React/Components/Buttons/CloseButton.jsx';

const Light = ({showLightUpdate, children, width}) => {

    // console.log('width', width);

    const handleClose = () => {
        showLightUpdate(false);
    }

    const handleClick = (event) => {
        event.stopPropagation();
    }

    return (
        <LightStyled className='Light' onClick={ handleClick } w={ width }>
            <CloseButton onClick={ handleClose } />
            { useMemo(() => children, [width]) }
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`
    position: absolute;
    background-color: #fff;

    width: ${
        ({w}) => {
            return w;
        }
    };
    height: auto;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    .CloseButton {
        position: absolute;
        right: -10px;
        top: -10px;
    }
`;