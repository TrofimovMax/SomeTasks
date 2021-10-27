import React from 'react';
import arrowLeft from './images/arrowLeft.png';
import arrowRight from './images/arrowRight.png';

export default function Pagination({ todoPerPage, totalTodo, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTodo / todoPerPage); i++) {
        pageNumbers.push(i);
    }

    if (totalTodo >= 6) {
        if (totalTodo >= 26){
            return (
                <div>
                    <ul className='container-inner list-group-item'>
                        {
                            <div>
                                <ul className='container-inner list-group-item'>
                                    <li className='page-item'>                        
                                        <button className = "page-btn first-page" 
                                        style = {{ backgroundImage: `url(${arrowLeft})` }}/>
                                    </li>
                                    {
                                        pageNumbers.map(number => {
                                            return (
                                                <li className='page-item'>
                                                    <button className="page-btn text" key={number}
                                                        onClick={() => paginate(number)}>
                                                        {number}
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                    <li className='page-item'>                        
                                        <button className="page-btn last-page" 
                                        style={{ backgroundImage: `url(${arrowRight})` }} />
                                    </li>
                                </ul>
                            </div>
                        }
                    </ul>
                </div>
            );
        } else{
            return (
                <div>
                    <ul className='container-inner list-group-item'>
                        {
                            <div>
                                <ul className='container-inner list-group-item'>
                                    {
                                        pageNumbers.map(number => {
                                            return (
                                                <li className='page-item'>
                                                    <button className="page-btn text" key={number}
                                                        onClick={() => paginate(number)}>
                                                        {number}
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        }
                    </ul>
                </div>
            );
        }
        
    } else{
        return (<div></div>);
    }
}
