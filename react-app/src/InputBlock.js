import React from 'react';
import { useState } from "react"

function InputBlock(props) {
    const [value, setValue] = useState('');
    return (
        <div className="container-inner">
            <input value={value} onChange={(e) => setValue(e.target.value)} className="input" type="text"/>
            <button className="btn text" onClick={(event) => { showValue(value); }}>Add</button>
        </div>
    );
}


function showValue(value){
    alert(value);
}

export default InputBlock