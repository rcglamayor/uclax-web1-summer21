import React from 'react';
import styled from 'styled-components';

const FormLabel = ({ control }) => {

    return (
        <FormLabelStyled className='FormLabel'>
            <label htmlFor={ control.id }>{ control.label }</label> 
        </FormLabelStyled>
    );
}

export default FormLabel;

const FormLabelStyled = styled.div`
    font-size: 20px;
    font-weight: bold;
`;