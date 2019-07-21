import React from 'react';
import { arrayOf, shape, bool } from 'prop-types';

import Spinner from '../UI/Spinner/Spinner';
import './index.css';

const Body = ({ images, loading }) => {
    const results = images.map(el => (
        <div className="wrapImg" key={el.position}>
            <img src={el.thumbnail} alt={el.thumbnail} />
        </div>
    ));

    return (
        <div className="containerBody">
            {loading ? <Spinner/> : results} 
        </div>
    );
}

Body.propTypes = {
    images: arrayOf(shape({})).isRequired,
    loading: bool.isRequired,
};

export default Body;