import React from 'react';
import img from '../../images/404 Error with a cute animal-pana.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
           <div className="not-custom p-5 mt-5 mb-5">
                <div className="custom-img d-flex justify-content-center">
                    <img className="" src={img} alt="" />
                </div>
                <div className="d-flex justify-content-center mt-2 custom-hover">
                    <h1>Oops! Page Not Found</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;