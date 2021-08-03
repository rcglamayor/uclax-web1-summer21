import React, { useState } from 'react';
import styled from 'styled-components';

import { tabbedData } from './tabbedData.js';

import Tabs from './Tabs.jsx';
import Content from './Content.jsx';

const Tabbed = () => {

    const [chosenTab, chosenTabUpdate] = useState(tabbedData[0]);

    // console.log('tabbedData', tabbedData);
    // console.log('chosenTab', chosenTab);

    return (
        <TabbedStyled className='Tabbed'>
            <div className="inset-container">
                <Tabs 
                    tabbedData= { tabbedData }
                    chosenTab = { chosenTab }
                    chosenTabUpdate = { chosenTabUpdate }
                />
                <Content 
                    chosenTab = { chosenTab }
                />
            </div> 
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    
`;