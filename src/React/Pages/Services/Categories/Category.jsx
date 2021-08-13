import React from 'react';
import styled from 'styled-components';

const Category = ({cat, curCat, curCatUpdate}) => {

    const handleClick = () => {
        curCatUpdate(cat);
    }

    const className = (curCat === cat) ? 'Category chosen' : 'Category';

    return (
        <CategoryStyled className={ className } onClick={ handleClick }>
            { cat } 
        </CategoryStyled>
    );
}

export default Category;

const CategoryStyled = styled.button`
    background-color: teal;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 0px 10px;

    &.chosen {
        background-color: #004343;
    }
`;