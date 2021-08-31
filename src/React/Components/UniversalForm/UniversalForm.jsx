import React, { useReducer } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context, { reducer } from './Context/index.js';

import Form from './Form/Form.jsx';
import FormGroup from './Form/FormGroup/FormGroup.jsx';
import SubmitButton from './Form/Controls/SubmitButton.jsx';
import Feedback from './Feedback.jsx';

const UniversalForm = ({ defaultFormData }) => {

    const [state, dispatch] = useReducer(reducer, defaultFormData);

    return (
        <Context.Provider value={ { state, dispatch } } displayName='Universal Form Context'>
            <UniversalFormStyled className='UniversalForm'>
                <Feedback />
                <Form>
                    {
                        state.controls.map((control, idx) => {
                            return <FormGroup control={ control } key={ idx } />
                        })
                    }

                    <SubmitButton />
                </Form> 
            </UniversalFormStyled>
        </Context.Provider>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`
    
`;