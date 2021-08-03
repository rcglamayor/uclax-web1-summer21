import React from 'react';
import styled from 'styled-components';

import { staffData } from './staffData.js';
import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import StaffMember from './StaffMember.jsx';

const StaffMembers = () => {

    // console.log('staffData', staffData);

    return (
        <StaffMembersStyled className='StaffMembers'>
            {
                staffData.map((member, idx) => {
                    return <StaffMember member={ member } key={ idx } />
                })
            }
        </StaffMembersStyled>
    );
}

export default StaffMembers;

const StaffMembersStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 48%);
    grid-gap: 2%;

    @media ${mediaQueries.mdUp} {
        grid-template-columns: repeat(auto-fill, 23%);
    }

    .StaffMember {
        margin-bottom: 20px;
    }
`;