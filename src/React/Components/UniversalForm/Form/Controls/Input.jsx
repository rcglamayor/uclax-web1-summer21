import React from 'react';
import styled from 'styled-components';

const Input = ({ inputName, handleUpdate }) => {

    return (
        <InputStyled className='Input'
            className='Input'
            type='text'
            id='first'
            value={ inputName }
            onChange={ handleUpdate }
        />
    );
}

export default Input;

const InputStyled = styled.input`
    
`;