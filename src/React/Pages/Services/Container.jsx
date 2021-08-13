import React, { useState } from 'react';
import styled from 'styled-components';

import { servicesData } from './servicesData.js';

import Categories from './Categories/Categories.jsx';
import Gallery from './Gallery/Gallery.jsx';

const Container = () => {

    const { categories, services } = servicesData;

    const [curCat, curCatUpdate] = useState(categories[1]);

    return (
        <ContainerStyled className='Container'>
            <p>{ curCat }</p>
            <Categories
                categories={ categories }
                curCat={ curCat }
                curCatUpdate={ curCatUpdate }
            />
            <Gallery services={ services } curCat={ curCat } />
        </ContainerStyled>
    );
}

export default Container;

const ContainerStyled = styled.div`
    
`;