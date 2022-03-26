import React, { useEffect, useState } from 'react';
import RingView from '../ringview/RingView';
import './Allrings.css'
import Selection from '../selection_panel/Selection';

const Allrings = () => {
    const [rings, setRings] = useState([])
    const [selection, setSelection] = useState([])

    useEffect(() => {
        fetch('rings.json')
            .then(response => response.json())
            .then(data => setRings(data))
    }, [])

    const handleSelection = (rings) => {
        const newSelection = [...selection, rings]
        setSelection(newSelection)
    }

    const clearList = () => {
        const newList = [];
        setSelection(newList);
    }
    const [selectResult, setSelectResult] = useState([]);
    const searchRing = () => {
        const randomRing = selection[Math.floor(Math.random() * selection.length)];
        setSelectResult(randomRing);
    }

    return (
        <div className='allrings-container'>
            <div className="ring-container">               {
                rings.map(ring => <RingView ring={ring} key={ring.id} clicked={handleSelection}></RingView>)
            }
            </div>
            <div className="select-panel-container">
                <Selection selection={selection} clearList={clearList} searchRing={searchRing} selectResult={selectResult}></Selection>
            </div>
        </div>
    );
};

export default Allrings;