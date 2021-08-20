import React from 'react';
import styled from 'styled-components';

const Form = ({children}) => {

    return (
        <FormStyled className='Form'>
            { children } 
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.form`
    
`;