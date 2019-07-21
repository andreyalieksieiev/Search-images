import React from 'react';

import './Button.css';

const Button = (props) => (
    <button className="Button" onClick={props.clicked} >
        Search Images
    </button>
);

export default Button;