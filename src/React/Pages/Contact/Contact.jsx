import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import Info from './Info/Info.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Map from './Map/Map.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <h1>Contact page</h1>
            <div className="row">
                <div className="col">
                    <Info />
                </div>
                <div className="col">
                    <ContactForm />
                </div>
            </div>
            <Map />
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
    @media ${mediaQueries.mdUp} {
        .row {
            display: flex;

            .col {
                flex: 1;
            }
        }
    }
    
    /* background-color: pink;

    @media (min-width: 800px) {
        background-color: orange;
    }

    @media (min-width: 1200px) {
        background-color: maroon;
    }

    h1 {
        background-color: purple;
        color: #fff;

        @media ${mediaQueries.md} {
            background-color: #000;
        }
    } */
`;