import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Hamburger = ({onClick}) => {

    return (
        <HamburgerStyled className='Hamburger' onClick={ onClick }>
            <FontAwesomeIcon icon={ faBars } />
        </HamburgerStyled>
    );
}

export default Hamburger;

const HamburgerStyled = styled.div`
    font-size: 30px;
    color: #fff;
    cursor: pointer;
`;