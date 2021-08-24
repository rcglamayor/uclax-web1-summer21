import React from 'react';
import styled from 'styled-components';

import Input from '../Controls/Input.jsx';
import Textarea from '../Controls/Textarea.jsx';

const FormControl = ({ control }) => {

    let ControlComponent = Input;

    switch(control.type) {
        case 'textarea':
            ControlComponent = Textarea;
            break;
        default:
            ControlComponent = Input;
            break;
    }

    return (
        <FormControlStyled className='FormControl'>
            <ControlComponent control={ control } /> 
        </FormControlStyled>
    );
}

export default FormControl;

const FormControlStyled = styled.div`
    
`;