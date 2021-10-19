import React from 'react';
import "./DoctorCard.css";

const DoctorCard = (props) => {
    const { name, images, details } = props.doctor;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={images} className="card-img-top" alt="..." />
                    <div className="card-body na-cus p-2">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text ">{details}</p>
                       <div className= "na-cus">
                       <i className="fab fa-facebook-square items"></i>
                        <i className="fab fa-twitter-square items "></i>
                        <i className="fab fa-linkedin items "></i>
                        <i className="fab fa-instagram-square items mb-5"></i>
                       </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;