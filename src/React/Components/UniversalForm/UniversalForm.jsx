import React, { useState } from 'react';
import styled from 'styled-components';

import Form from './Form/Form.jsx';
import FormGroup from './Form/FormGroup.jsx';
import FormLabel from './Form/FormLabel.jsx';
import FormControl from './Form/FormControl.jsx';

const UniversalForm = () => {

    const [inputName, inputNameUpdate] = useState('');

    const handleUpdate = (event) => {
        inputNameUpdate(event.target.value);
    }

    console.log('inputName', inputName);

    return (
        <UniversalFormStyled className='UniversalForm'>
            <Form>
                <FormGroup>
                    <FormLabel />
                    <FormControl
                        inputName={ inputName }
                        handleUpdate={ handleUpdate }
                    />
                </FormGroup>
            </Form> 
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`
    
`;