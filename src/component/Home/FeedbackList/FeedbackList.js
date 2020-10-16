import React from 'react';

const FeedbackList = (feedback) => {
    const { img, name, title, description } = feedback.feedback
    return (
        <div className="service card-deck col-md-4 col-sm-6 col-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img style={{ width: '95%' }} src={img} className="card-img rounded-circle" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h4 className="card-title">{name}</h4>
                            <h5 className="card-title">{title}</h5>
                        </div>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackList;