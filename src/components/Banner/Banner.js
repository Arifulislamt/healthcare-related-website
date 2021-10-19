import React from 'react';
import './Banner.css';
import images1 from '../../images/banner1.jpg';
import images2 from '../../images/banner2.jpg';
import images3 from '../../images/banner3.jpg';

const Banner = () => {
    return (
        <div className="mx-2 mb-5">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={images1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption title">
        <p>Best Healling Service</p>
        <h1> Fovia is the No.1 Hospital</h1>
        <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cum non esse enim dicta rerum ratione consectetur velit ipsum? Illum laudantium.</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={images2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block title">
        <p>Exceptional Care For Women</p>
        <h1>Exceptional Care For Women</h1>
        <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cum non esse enim dicta rerum ratione consectetur velit ipsum? Illum laudantium.</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={images3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block title">
      <p>Health Service</p>
        <h1>Your Health Is Our Top Priority</h1>
        <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cum non esse enim dicta rerum ratione consectetur velit ipsum? Illum laudantium.</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;