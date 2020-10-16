import React from 'react';
import { Link } from 'react-router-dom';
import designer from '../../../images/logos/designer.png';

const HeaderMain = () => {
    return (
        <main style={{ height: '520px' }} className="row d-flex align-items-center">
            <div className="col-md-6 col-sm-12 col-12">
                <h1 style={{ color: '#111430' }}>Let’s Grow Your<br />Brand To The<br />Next Level</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link style={{ width: '30%' }} to="/" className="btn btn-brand">Hire us</Link>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
                <img src={designer} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;