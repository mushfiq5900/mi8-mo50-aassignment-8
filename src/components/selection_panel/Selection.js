import './Selection.css'

const Selection = (props) => {
    const { selection, selectResult } = props
    return (
        <div className='ring-names'>
            <h4>Selected Items:</h4>
            {
                selection.map(rings =>
                    <div className='cart-info' key={rings.id}>
                        <p>{rings.name}</p>
                        <img src={rings.img} alt="" />
                    </div>
                )
            }
            <button onClick={props.searchRing} className='gen-btn'>Select The Ring</button>
            <button onClick={props.clearList} className='gen-btn' >Clear List</button>
            <div className='selected-ring'>
                <h4>Randomely Selected Ring Is:</h4>
                <img src={selectResult.img} alt="" />
                <p>Name: {selectResult.name}</p>
            </div>
        </div>

    );
};

export default Selection;