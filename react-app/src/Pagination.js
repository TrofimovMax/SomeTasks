import React from 'react';
import arrowLeft from './images/arrowLeft.png';
import arrowRight from './images/arrowRight.png';

export default function Pagination({ TODO_PER_PAGE, totalTodo, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTodo / TODO_PER_PAGE); i++) {
        pageNumbers.push(i);
    }

    if (totalTodo >= 6) {
        return (
            <div>
                <ul className='container-inner list-group-item'>
                    {
                        <div>
                            <ul className='container-inner list-group-item'>
                                <li className='page-item'>
                                    <button className="page-btn first-page"
                                        style={{ backgroundImage: `url(${arrowLeft})` }} 
                                        onClick={() => paginate(1)}
                                        />
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
                                        style={{ backgroundImage: `url(${arrowRight})` }} 
                                        onClick={() => paginate(totalTodo / TODO_PER_PAGE)}
                                        />
                                </li>
                            </ul>
                        </div>
                    }
                </ul>
            </div>
        );
    }
    else {
        return (<div></div>);
    }    
} 
