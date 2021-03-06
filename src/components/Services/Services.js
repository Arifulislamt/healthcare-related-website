import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const Services = () => {
    const { userId} = useParams();
    // console.log(serviceId);
    const [services, setServices] = useState([]);
    const [totalDetail, setTotalDetail] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])


    useEffect(()=> {
        const details = services?.find(td => td.id == userId )
        setTotalDetail(details);
    },[services])





    return (
        <div>
            <div className="bag-img d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-white fw-bold">Our Service </h1>
                </div>
            </div>
            <div className="container mt-5">
                <div className="card mb-3">
                    <img src={totalDetail?.images}className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{totalDetail?.details}</h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;