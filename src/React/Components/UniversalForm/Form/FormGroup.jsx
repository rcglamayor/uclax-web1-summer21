import React from 'react';
import styled from 'styled-components';

const FormGroup = ({children}) => {

    return (
        <FormGroupStyled className='FormGroup'>
            { children } 
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    
`;