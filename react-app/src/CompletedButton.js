import React from 'react';

import okBefore from './images/okBefore.svg';
import okClick from './images/okClick.svg';

export default function CompletedButton(id, completed, changeCompleted){
    {if (completed) {
        return <button className="comletedtodo-btn" onClick={() => changeCompleted(id)} 
        style={{ backgroundImage: `url(${okClick})`}} />;
    }
    return <button className="comletedtodo-btn" onClick={() => changeCompleted(id)} 
      style={{ backgroundImage: `url(${okBefore})`}} />;}
}