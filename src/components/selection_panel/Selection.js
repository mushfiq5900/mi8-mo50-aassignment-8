import './Selection.css'

const Selection = (props) => {
    const { selection } = props
    const names = []
    for (const ring of selection) {
        names.push(ring.name + " ")
    }
    return (
        <div className='ring-names'>
            <h4>Selected Items:</h4>
            <h4>{names}</h4>
            <button className=''>Select The Ring</button>
            <button >Add to Selection</button>
        </div>
    );
};

export default Selection;