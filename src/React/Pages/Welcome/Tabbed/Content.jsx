import React from 'react';
import styled from 'styled-components';

const Content = ({chosenTab}) => {

    return (
        <ContentStyled className='Content'>
            <div className="image">
                <img src={ chosenTab.image } alt={ chosenTab.title } />
            </div>
            <div className="info">
                <h3>{ chosenTab.title }</h3>
                <div dangerouslySetInnerHTML={ { __html: chosenTab.text } } />
            </div>
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    padding: 20px;
    background-color: teal;
    min-height: 200px;

    display: flex;

    .image {
        flex: 1;
        img {
            max-width: 100%;
        }
    }

    .info {
        flex: 4;
        padding: 0px 20px;
    }
`;