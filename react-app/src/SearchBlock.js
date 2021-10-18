import React from 'react';
import { useState } from "react"

function SearchBlock(props) {
    const [value, setValue] = useState('');
    return (
        <div className="input-panel">
            <input value={value} onChange={(e) => setValue(e.target.value)} className="input" type="text"/>
            <button className="save-btn text" onClick={(event) => { showValue(value); }} />
                <p>Save</p>
        </div>
    );
}


function showValue(value){
    alert(value);
}

export default SearchBlock