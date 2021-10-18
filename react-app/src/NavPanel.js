import React from 'react';
import arrowLeft from './images/arrowLeft.png';
import arrowRight from './images/arrowRight.png';

function NavPanel(props) {
    return (
        <div className="nav-panel">
                <button className="nav-btn first-page" style={{ backgroundImage: `url(${arrowLeft})` }}>

                </button>
                <button className="nav-btn text">
                    <p>1</p>
                </button>
                <button className="nav-btn text">
                    <p>2</p>
                </button>
                <button className="nav-btn text">
                    <p>3</p>
                </button>
                <button className="nav-btn text">
                    <p>4</p>
                </button>
                <button className="nav-btn text">
                    <p>5</p>
                </button>
                <button className="nav-btn last-page" style={{ backgroundImage: `url(${arrowRight})` }}>

                </button>
            </div>
    );
}

export default NavPanel
