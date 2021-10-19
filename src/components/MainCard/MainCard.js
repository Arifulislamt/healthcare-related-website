import React from 'react';
import { Link } from 'react-router-dom';

const MainCard = (props) => {
    const {id,images, name, details} = props.user;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg">
                    <img src={images} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{details.slice(0,100)}.</p>
                    </div>
                    <div className="card-footer">
                       <Link to={`/services/${id}`}>
                       <button className="btn btn-success">READ MORE <i className="fas fa-arrow-right"></i></button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCard;