import React from 'react';
import styled from 'styled-components';

import Info from './Info/Info.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Map from './Map/Map.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <h1>Contact page</h1>
            <Info />
            <ContactForm />
            <Map />
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;