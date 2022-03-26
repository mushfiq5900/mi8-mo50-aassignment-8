import React from 'react';
import './RingView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'



const RingView = (props) => {
    const { name, img, brand, price } = props.ring
    return (
        <div className='container-div'>
            <div className="ring-card">
                <img src={img} alt={name} />
                <div className="ring-details">
                    <h3 className='ring-name'>{name}</h3>
                    <h4>Price: {price}$</h4>
                    <h5>Brand Name: {brand}</h5>
                </div>
                <button onClick={() => props.clicked(props.ring)} className='selection-btn'>Add to Selection
                    <FontAwesomeIcon icon={faList}> </FontAwesomeIcon>
                </button>


            </div>
        </div>
    );
};

export default RingView;