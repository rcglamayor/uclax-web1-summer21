import { createContext } from 'react';
export default createContext();

import { actionTypes } from './actionTypes.js';
/*---------------------------
| State Updater (reducer)
---------------------------*/
export const reducer = (state, action) => {

    switch(action.type) {
        case actionTypes.UF_UPDATE_CONTROL: {
            return {
                ...action.newState
            };
        }
        case actionTypes.UF_SUBMIT_FORM: {
            return {
                ...action.newState
            };
        }

        default: {
            return {...state}
        }
    }
}