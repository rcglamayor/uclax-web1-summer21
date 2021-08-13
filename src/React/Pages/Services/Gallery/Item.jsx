import React from 'react';
import styled from 'styled-components';

const Item = ({ service }) => {

    return (
        <ItemStyled className='Item'>
            <img src="/img/Services/service-1.jpg" alt="service1" />
            <h3>{ service.title }</h3>
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
        padding 5px;
        font-size: 18px;
        margin: 0px;
    }
`;