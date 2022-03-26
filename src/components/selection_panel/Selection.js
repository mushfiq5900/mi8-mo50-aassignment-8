import React from 'react';
import './Selection.css'

const Selection = (props) => {
    const { selection } = props
    const names = []
    const id = []
    for (const ring of selection) {
        names.push(ring.name)
        id.push(ring.id)
    }
    function selectRing(){
        
    }
    return (
        <div className='ring-names'>
            <h4>Selected Items:   </h4>
            <h4>{names}</h4>
            <button className=''>Select The Ring</button>
        </div>
    );
};

export default Selection;