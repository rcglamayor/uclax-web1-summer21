import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import Item from './Item.jsx';

const Gallery = ({ services, curCat }) => {

    return (
        <GalleryStyled className='Gallery'>
            {
                services
                    .filter((service) => {
                        return curCat === 'All' || service.category === curCat;
                    })
                    .map((service, idx) => {
                    return <Item key={ idx } service={ service } />
                })
            }
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    margin: 25px 0px;
    display: grid;
    /* grid-column-gap: 2%;
    grid-row-gap: 20px; */
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);

    @media ${mediaQueries.lgUp} {
        /* grid-template-columns: 100px 1fr 100px 1fr; */
        grid-template-columns: repeat(4, 1fr);
    }
`;