import React from 'react';
import styled from 'styled-components';

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } alt={ member.name } /> 
            <h3>{ member.name }</h3>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

    img {
        display: block;
        width: 100%;
    }

    h3 {
        margin: 0px;
        color: #fff;
        background-color: maroon;
        padding: 5px;
    }
`;