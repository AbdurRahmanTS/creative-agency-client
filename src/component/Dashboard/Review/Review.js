import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({});

    const handleBlur = e => {
        const newInfo = { ...review };
        newInfo[e.target.name] = e.target.value;
        setReview(newInfo);
    }

    const handleSubmit = (event) => {
        const formData = new FormData()
        formData.append('img', loggedInUser.photo);
        formData.append('name', review.name || loggedInUser.name);
        formData.append('title', review.title);
        formData.append('description', review.description);

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Review saved successfully')
            })
            .catch(error => {
                console.error(error)
            })
        event.preventDefault();
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5 h-100" style={{ position: "absolute", right: 0 }}>
                <nav className="navbar navbar-expand-lg navbar-light ml-5 mt-4">
                    <h2 className="navbar-brand">Review</h2>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <h5>{loggedInUser.name}</h5>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div style={{ backgroundColor: "#F4FDFB", height: "100%", overflow: "hidden" }}>
                    <form className="w-50 pt-5 pl-5" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name" value={loggedInUser.name} required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Designation, Company’s name" required />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} type="text" className="form-control" name="description" rows="5" placeholder="Description" required />
                        </div>
                        <button type="submit" className="btn btn-brand mr-5 mb-5">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;