import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import './Doctors.css';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div className="bag-img d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-white fw-bold">Meet Doctors</h1>
                </div>
            </div>
            <div className="container my-5">
                <div>
                    <h1 className="text-center my-5 fw-bold">Meet Our <span className="ti-color">Qualified Doctors</span></h1>
                </div>
                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            doctors.map(doctor => <DoctorCard
                                key={doctor.id}
                                doctor={doctor}
                            ></DoctorCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;

