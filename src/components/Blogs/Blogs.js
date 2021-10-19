import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blogs.css';

const Blogs = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        fetch('./blog.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div className="container cos-whi">
            <div className="text-center mb-5">
                <h5 style={{color: 'lightgreen'}}>News Blog</h5>
                <h1 style={{fontWeight: "bold"}}>The News from Our Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    users.map(user => <BlogCard 
                        key={user.id}
                        user={user}
                        ></BlogCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Blogs;