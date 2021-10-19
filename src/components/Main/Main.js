import React, { useEffect, useState } from 'react';
import MainCard from '../MainCard/MainCard';
import './Main.css';

const Main = () => {
    const [user , setUser] = useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div className="container">
          <div className="titles text-center ">
          <h5>Our Services</h5>
            <h1>Our Healthcare Services</h1>
            <hr />
          </div>
          <div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
              {
                  user.map(user => <MainCard 
                    key={user.id}
                    user={user}></MainCard>)
              }
          </div>
          </div>
        </div>
    );
};

export default Main;