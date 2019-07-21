import React from 'react';

import './Input.css';

const Input = (props) => {
    return (
        <input className="Input" onChange={props.changed} />
    );
}

export default Input;