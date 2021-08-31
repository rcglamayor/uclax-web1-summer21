import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './Context/index.js';

const Feedback = () => {

    const { state } = useContext(Context);

    const message = state.message;

    if (message.length < 1) { return ''; }

    return (
        <FeedbackStyled className='Feedback'>
            <h2>Form Response</h2>
            { message } 
        </FeedbackStyled>
    );
}

export default Feedback;

const FeedbackStyled = styled.div`
    background-color: orange;
    padding: 20px;
    margin-bottom: 30px;

    h2 {
        margin: 0px;
    }
`;