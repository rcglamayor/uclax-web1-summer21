import React from 'react';
import styled from 'styled-components';

const Essay = ({ number, question, children }) => {
    return (
        <EssayStyled className='Essay'>
            <h3>Essay #{ number}</h3>
            <div className="question">{ question }</div>
            <div className="answer">{ children }</div>
        </EssayStyled>
    );
}

export default Essay;

const EssayStyled = styled.div`
    padding: 20px;
    border: solid 5px teal;
    margin: 20px;

    h3 { margin: 0px 0px 10px; }

    .question {
        font-size: 18px;
        background-color: #636363;
        padding: 10px;
        color: #fff;
    }
    .answer {
        font-size: 16px;
        background-color: #dadada;
        padding: 10px;
    }

`;