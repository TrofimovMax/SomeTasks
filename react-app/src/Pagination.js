import React from 'react';
import arrowLeft from './images/arrowLeft.png';
import arrowRight from './images/arrowRight.png';

function Pagination(props) {
    return (
        <div className="container-inner">
                <button className="page-btn first-page" style={{ backgroundImage: `url(${arrowLeft})` }}>

                </button>
                <button className="page-btn text">
                    <p>1</p>
                </button>
                <button className="page-btn text">
                    <p>2</p>
                </button>
                <button className="page-btn text">
                    <p>3</p>
                </button>
                <button className="page-btn text">
                    <p>4</p>
                </button>
                <button className="page-btn text">
                    <p>5</p>
                </button>
                <button className="page-btn last-page" style={{ backgroundImage: `url(${arrowRight})` }}>

                </button>
            </div>
    );
}

export default Pagination
