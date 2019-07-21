import React from 'react';
import { func } from 'prop-types';

import './index.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Header = ({ clickSubmit, changeHandler }) => {
    return (
        <div className="containerHeader">
            <h1 className="h1">SEARCH IMAGES</h1>
                <div>
                    <Input changed={changeHandler} />
                    <Button clicked={clickSubmit} />
                </div>
        </div>
    );
} 

Header.propTypes = {
    clickSubmit: func.isRequired,
    changeHandler: func.isRequired,
};

export default Header;