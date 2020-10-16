import React, { useEffect, useState } from 'react';
import ServiceItems from '../ServiceItems/ServiceItems';

const Services = () => {
    const [serviceData, setServicesData] = useState([])
    useEffect(() => {
        fetch('https://nameless-island-05634.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])
    return (
        <section className="container mt-5">
            <h2 className='text-center'>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
            <div className="row mt-5">
                {
                    serviceData.map(service => <ServiceItems key={service._id} service={service} ></ServiceItems>)
                }
            </div>
        </section>
    );
};

export default Services;