import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm';

const ContactForm = () => {

    const defaultFormData = {
        controls: [
            {
                id: 'fullname',
                label: 'Full Name',
                value: '',
                type: 'text',
            },
            {
                id: 'email',
                label: 'Email',
                value: '',
                type: 'text',
            },
            {
                id: 'message',
                label: 'Message',
                value: '',
                type: 'textarea',
            },
        ]
    }

    return (
        <ContactFormStyled className='ContactForm'>
            <UniversalForm defaultFormData={ defaultFormData } /> 
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    
`;