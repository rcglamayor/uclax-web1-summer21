import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm';

const Login = () => {

    const defaultFormData = {
        apiUrl: '/user/login',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',

        controls: [
            {
                id: 'username',
                label: 'Username',
                value: 'DavidH',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
            {
                id: 'password',
                label: 'Password',
                value: 'legion',
                type: 'password',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
        ]
    }

    return (
        <LoginStyled className='Login'>
            <UniversalForm defaultFormData={ defaultFormData } /> 
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;