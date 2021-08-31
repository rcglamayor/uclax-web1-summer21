import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../../Context/index.js';
import { updateControl } from '../../Context/actions.js';

const Textarea = ({control}) => {
    const { dispatch, state } = useContext(Context);

    const handleUpdate = (e) => {
        updateControl(control.id, e.target.value, dispatch, state);        
    }

    const className = (!control.validation.isValid) ? 'Input error':'Input';

    return (
        <TextareaStyled
            className={ className }
            id={ control.id }
            value={ control.value }
            onChange={ handleUpdate }
        />
    );
}

export default Textarea;

const TextareaStyled = styled.textarea`
    width: 100%;
    height: 200px;
    font-size: 20px;
    padding: 10px;
    border: solid 2px gray;
    outline: none;

    &:focus {
        background-color: #eee;
    }
    &.error {
        border: solid 2px red;
    }
`;