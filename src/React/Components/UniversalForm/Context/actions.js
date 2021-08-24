import { actionTypes } from './actionTypes.js';

/*---------------------------
| Actions (Action Creators)
---------------------------*/
export const updateControl = (id, value, dispatch, state) => {

    let newState = { ...state };

    newState = updateControls(id, value, newState);
    // validating fields

    dispatch ({
        type: actionTypes.UF_UPDATE_CONTROL,
        newState: newState,
    });
}

const updateControls = (id, value, currentState) => {
    const newControls = currentState.controls.map((stateControl) => {
        if (stateControl.id === id) {
            stateControl.value = value;
        }
        return stateControl;
    });

    return {
        ...currentState,
        controls: newControls,
    }
}
