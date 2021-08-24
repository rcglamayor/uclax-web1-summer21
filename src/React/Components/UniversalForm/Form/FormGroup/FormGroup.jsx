import React from 'react';
import styled from 'styled-components';

import FormLabel from './FormLabel.jsx';
import FormControl from './FormControl.jsx';

const FormGroup = ({ control }) => {

    return (
        <FormGroupStyled className='FormGroup'>
            <FormLabel control={ control } />
            <FormControl control={ control } />
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    margin-bottom: 15px;
`;