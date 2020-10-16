import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceItems.css'

const ServiceItems = ({service}) => {
    const {img, title, description} = service;
    return (
        <div className="service card-deck col-md-4 col-sm-6 col-12">
            <Link to={/order/+title}>
            <div className="card cards text-center" style={{color: 'black' }}>
                <img src={`data:image/png;base64,${img.img}`} className="card-img-top service-img-style" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default ServiceItems;