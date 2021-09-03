import React from 'react';
import styled from 'styled-components';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { slidesData } from './slidesData.js';
import Slide from './Slide';

const Slideshow = () => {

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
                showThumbs={ false }
                showIndicators={ false }
                autoPlay={ true }
                infiniteLoop={ true }
                showArrows={ true }
            >
                {
                    slidesData.map((slide, idx) => {
                        return <Slide slide={ slide } key={ idx } />
                    })
                }
            </Carousel> 
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
    margin-bottom: 50px;

    .carousel .slide .legend {
        background-color: maroon;
    }
`;