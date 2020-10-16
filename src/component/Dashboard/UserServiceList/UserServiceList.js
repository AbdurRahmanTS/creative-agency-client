import React from 'react';

const UserServiceList = ({ serviceList }) => {
    const { img, title, description, status } = serviceList;
    return (
        <div className="service card-deck col-md-6">
            <div className="card border-0" style={{ borderRadius: '15px' }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img style={{ width: '50%' }} src={`data:image/png;base64,${img}`} className="card-img rounded-circle mb-4" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h5 className="float-right">{status}</h5>
                        </div>
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default UserServiceList;