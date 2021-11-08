import React, { useState } from 'react';

export default function Edit({ id, name, done,  changeName }) {

    const [isInEditMode, setIsInEditMode] = useState(false)
    const [editingText, setEditingText] = useState('');

    function handleChange(e) {
        setEditingText(e.target.value);
    }

    function handleEditChange(e) {
        if(e.key === ' ' && editingText === '') return;
        if(e.key === 'Enter'){
            updateTodoValue(id, editingText);
            return;
        }
        if(e.key === 'Escape'){
            changeEditMode();
            return;
        }
    }

    const changeEditMode = () => {
        setIsInEditMode(!isInEditMode);
    }

    const updateTodoValue = (id, value) => {
        changeName(id, value, done);
        setIsInEditMode(false);
        setEditingText('');
    }

    const renderEditView = () => {
        return (
            <>
                <input 
                    id = 'EditInput'
                    type = 'text'
                    autoFocus
                    value = {editingText}
                    onChange = {handleChange}
                    onKeyDown = {handleEditChange}
                />
                {/* <button className='btn text' onClick={() => updateTodoValue(id, editingText)}>OK</button> */}
            </>
        )
    }

    const renderDefaultView = () => {
        return (
            <div className="name-todo text" onDoubleClick={changeEditMode}>
                {name}
            </div>
        )
    }

    return (
        isInEditMode ? renderEditView() : renderDefaultView()
    )
}