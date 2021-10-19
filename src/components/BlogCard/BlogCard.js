import React from 'react';

const BlogCard = (props) => {
    const {name, images, details} = props.user;
    return (
        <div>
              <div className="col">
    <div className="card h-100 border-0 shadow-lg">
      <img src={images} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{details}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">View Details</small>
      </div>
    </div>
        </div>
        </div>
    );
};

export default BlogCard;