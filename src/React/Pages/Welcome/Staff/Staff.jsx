import React from 'react';
import styled from 'styled-components';

import StaffMembers from './StaffMembers.jsx';

const Staff = () => {

    return (
        <StaffStyled className='Staff'>
            <div className="inset-container">
                Staff
                <StaffMembers />
            </div> 
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`
    * div {
        border: none;
        padding: 0px;
    }
`;