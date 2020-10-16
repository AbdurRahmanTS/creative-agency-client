import React, { useEffect, useState } from 'react';
import FeedbackList from '../FeedbackList/FeedbackList';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/feedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <section className='container'>
            <h2 className='text-center pb-5'>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            <div className="row">
                {
                    feedbacks.map(feedback => <FeedbackList key={feedback._id} feedback={feedback}></FeedbackList>)
                }
            </div>
        </section>
    );
};

export default Feedback;