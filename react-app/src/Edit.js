import React, { useState } from 'react';

export default function Edit({ id, name, changeName }) {

    const [isInEditMode, setIsInEditMode] = useState(false)
    const [editingText, seteditingText] = useState('');

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
        seteditingText(editingText + e.key);
    }

    const changeEditMode = () => {
        setIsInEditMode(!isInEditMode);
    }

    const updateTodoValue = (id, value) => {
        changeName(id, value);
        setIsInEditMode(false);
        seteditingText('');
    }

    const renderEditView = () => {
        return (
            <>
                <input 
                    id = 'EditInput'
                    type='text'
                    autoFocus
                    value={editingText}
                    onKeyDown={handleEditChange}
                />
                <button className='btn text' onClick={() => updateTodoValue(id, editingText)}>OK</button>
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