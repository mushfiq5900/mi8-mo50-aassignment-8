import React from 'react';

const RingView = (props) => {
    const { name, img, brand, price } = props.ring
    return (
        <div className="ring-list">
            <img src={img} alt={name} />
            <div className="ring-details">
                <h3>{name}</h3>
                <h4>Price:{price}</h4>
                <h5>Brand Name:{brand}</h5>
            </div>
            <button onClick={() => props.clicked(props.ring)}>Add to Cart</button>
        </div>
    );
};

export default RingView;