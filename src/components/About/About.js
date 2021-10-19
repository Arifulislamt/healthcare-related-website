import React from 'react';
import images from '../../images/img2.jpg';
import './About.css';

const About = () => {
    return (
        <div >
            <div className="bag-img d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-white fw-bold">About us</h1>
                </div>
            </div>
            <div className='container'>
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={images} className="w-100" alt="" />
                </div>
                <div className="col-md-6 ">
                    <h4 style={{color: "lightgreen"}}>About Us</h4>
                    <h1 className="fw-bold">Short Story About Fovia Clinic Since 2021.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium amet suscipit consequatur sint iste enim fugiat, ea nemo expedita iusto temporibus et odit, pariatur molestias corrupti unde nisi dicta!</p>
                    <li className="li-color"> Scientific Skills For getting a better result</li>
                    <li className="li-color"> Communication Skills to getting in touch</li>
                    <li className="li-color"> A Career Overview opportunity Available</li>
                    <li className="li-color"> Professional Staff</li>
                    <li className="li-color"> NEWBORN CARE</li>
                    <li className="li-color"> Tooth Extraction</li>
                    <button className="btn btn-success mt-3"> Learn More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;