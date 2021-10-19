import React from 'react';
import './Footer.css';
import logo from '../../images/white-logo.png';

const Footer = () => {
    return (
       <div>
            <div className="custom-color text-white mt-5">
            <div className="container">
                <div className="my-5 border-bottom pt-5">
                    <h1 className="text-center">Join Our Newsletter</h1>
                    <p className="text-center"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, modi.</p>
                </div>
                <div className="row pb-3">
                    <div className="col-md-3 col-12 mt-5 mb-5">
                        <img src={logo} alt="" />
                        <p className="mt-2">Fovia is tha No.1 healthcare hospital in the world. The medical health related organizations, institutes, clinics and businesses.</p>
                        <i className="fab fa-facebook-square items fa-2x"></i>
                        <i className="fab fa-twitter-square items fa-2x"></i>
                        <i className="fab fa-linkedin items fa-2x"></i>
                        <i className="fab fa-instagram-square items fa-2x mb-5"></i>
                    </div>
                    <div className="col-md-3 col-12 mt-5 para">
                        <h4>Departments</h4>
                        <p>Surgery and Radiology</p>
                        <p>Departments</p>
                        <p>Family</p>
                        <p>Our Doctors</p>
                        <p>Woman's Health</p>
                        <p>Blog</p>
                    </div>
                    <div className="col-md-3 col-12 mt-5 para">
                        <h4 >Links</h4>
                        <p>Optician</p>
                        <p>Shop</p>
                        <p>Pediatrics</p>
                        <p>Contact Us</p>
                        <p>Dermatology</p>
                        <p>Doctors</p>
                    </div>
                    <div className="col-md-3 col-12 mt-5 para mb-5">
                        <h4>Opening Hours</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>MON - TUES</td>
                                    <td> <span className="ms-5"> 9.00AM - 17.00PM</span></td>
                                    {/* <hr /> */}
                                </tr>
                                <tr>
                                    <td>WEDNESDAY</td>
                                    <td> <span className="ms-5"> 9.00AM - 17.00PM</span></td>
                                    {/* <hr /> */}
                                </tr>
                                <tr>
                                    <td>THURSDAY</td>
                                    <td><span className="ms-5"> 9.00AM - 17.00PM</span></td>
                                    {/* <hr /> */}
                                </tr>
                                <tr>
                                    <td>FRIDAY</td>
                                    <td> <span className="ms-5"> 9.00AM - 17.00PM</span></td>
                                    <hr />
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>SATURDAY</td>
                                    <td> <span className="ms-5"> CLOSED</span></td>
        
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container">
        <p className="text-center mt-5 border-top py-5">All rights reserved.© 2021. Fovia-Medical Arif. Bangladesh.</p>
        </div>
        </div>
       </div>
    );
};

export default Footer;