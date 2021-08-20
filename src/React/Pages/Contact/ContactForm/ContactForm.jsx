import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm';

const ContactForm = () => {

    return (
        <ContactFormStyled className='ContactForm'>
            <UniversalForm /> 
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    
`;