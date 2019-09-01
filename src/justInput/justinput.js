import React, { useState, useRef, useEffect } from 'react';

const InputCus = () => {

    const refElemY = useRef();

    const onBtnClick = (e) => {
        e.preventDefault();
        refElemY.current.focus();
    } 

    return (
        <form>
            <input ref={ refElemY } />
            <button
                onClick={ onBtnClick }
            >Click to add focus</button>
        </form>
    )
}

export default InputCus;