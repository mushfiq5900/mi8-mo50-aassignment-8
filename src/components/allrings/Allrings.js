import React, { useEffect, useState } from 'react';
import RingView from '../ringview/RingView';
import './Allrings.css'

const Allrings = () => {
    const [rings, setRings] = useState([])
    console.log(rings)

    useEffect(() => {
        fetch('rings.json')
            .then(response => response.json())
            .then(data => setRings(data))
    }, [])

    return (
        <div className='allrings-container'>
            <div className="ring-container">               {
                rings.map(ring => <RingView ring={ring} key={ring.id}></RingView>)
            }
            </div>
            <div className="select-panel-container">
                {/* Selection Panel */}
            </div>
        </div>
    );
};

export default Allrings;