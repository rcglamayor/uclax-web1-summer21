import React from 'react';
import styled from 'styled-components';

import Category from './Category.jsx';

const Categories = ({ categories, curCat, curCatUpdate }) => {

    return (
        <CategoriesStyled className='Categories'>
            {
                categories.map((cat, idx) => {
                    return <Category
                                key={ idx }
                                cat={ cat }
                                curCat={ curCat}
                                curCatUpdate={ curCatUpdate }
                            />
                })
            }
        </CategoriesStyled>
    );
}

export default Categories;

const CategoriesStyled = styled.div`
    text-align: center;
    margin-bottom: 15px;
`;