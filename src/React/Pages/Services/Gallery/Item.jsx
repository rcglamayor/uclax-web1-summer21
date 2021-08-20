import React from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx';

const Item = ({ service }) => {

    const { media } = useMediaQuery();

    const LightboxContent = () => {
        return (
            <div>
                <img src={ service.image } alt={ service.title } /> 
                <h3>{ service.title }</h3>
                <div className="cost">{ service.cost }</div>
                <p>{ service.description }</p>
            </div>
        );
    }

    const width = (media.mdUp) ? '400px' : '200px';

    return (
        <ItemStyled className='Item'>
            <Lightbox LightboxContent={ LightboxContent } width={ width }>
                <img src={ service.image } alt={ service.title } />
                <h3>{ service.title }</h3>
            </Lightbox>
        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    img {
        width: 100%;
        display: block;
    }
    h3 {
        background-color: teal;
        color: #fff;
        padding: 5px;
        font-size: 18px;
        margin: 0px;
    }
    p {
        /* margin: 0px 0px 5px 0px; */
    }
`;