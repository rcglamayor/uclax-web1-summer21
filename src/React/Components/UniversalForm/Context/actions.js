import { actionTypes } from './actionTypes.js';
import { isValidEmail } from 'common/utilities.js';
import API from 'common/API.js';

/*---------------------------
| Actions (Action Creators)
---------------------------*/
export const updateControl = (id, value, dispatch, state) => {

    let newState = { ...state };

    newState = updateControls(id, value, newState);
    newState = validateControls(newState);
    // validating fields

    dispatch ({
        type: actionTypes.UF_UPDATE_CONTROL,
        newState: newState,
    });
}

export const submitForm = async (dispatch, state) => {
    let newState = {
        ...state,
        hasSubmitted: true,
    }

    newState = validateControls(newState);
    newState = await submitData(newState);

    dispatch({
        type: actionTypes.UF_SUBMIT_FORM,
        newState: newState,
    });
}

const submitData = async (currentState) => {
    let response = 'Unable to post to server';
    let message = 'testing';

    // API call
    const apiRawResponse = await API.post(currentState.apiUrl, currentState.controls);

    response = apiRawResponse.data;

    message = (response.success)
        ? 'Form Submitted Successfully'
        : 'Error submitting form. Please try again.'

    console.log('response', response);

    return {
        ...currentState,
        request: JSON.stringify(currentState.controls),
        response: response,
        message: message,
    }
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

const validateControls = (currentState) => {

    const newControls = currentState.controls.map((stateControl) => {

        stateControl.validation.isValid = true;
        stateControl.validation.message = '';

        stateControl.validation.rules.forEach((rule) => {
            switch(rule) {
                case 'required': {
                    if (stateControl.value.length < 1) {
                        stateControl.validation.isValid = false;
                        stateControl.validation.message = `You are missing the required ${stateControl.label} field.`;                
                    }
                    break;
                }
                case 'email': {
                    if (!isValidEmail(stateControl.value)) {
                        stateControl.validation.isValid = false;
                        stateControl.validation.message = `The ${stateControl.label} field does not appear to be a valid email.`;                
                    }
                    break;
                }
            }
        });

        return stateControl;
    });

    return {
        ...currentState,
        controls: newControls,
    }
}