import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const orderName = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState({});
    const [file, setFile] = useState(null);
    const [serviceInfo, setServicesInfo] = useState([])

    useEffect(() => {
        fetch('https://nameless-island-05634.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                const orderInfo = data.find(order => orderName.orderName === order.title);
                setServicesInfo(orderInfo);
            })
    }, [])

    const handleBlur = e => {
        const newInfo = { ...order };
        newInfo[e.target.name] = e.target.value;
        setOrder(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (event) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', order.name || loggedInUser.name);
        formData.append('email', order.email || loggedInUser.email);
        formData.append('title', serviceInfo.title);
        formData.append('description', serviceInfo.description);
        formData.append('price', serviceInfo.price);
        formData.append('img', serviceInfo.img.img);

        fetch('https://nameless-island-05634.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('New order successfully')
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
                    <h2 className="navbar-brand">Order</h2>
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
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name / Company’s name" defaultValue={loggedInUser.name} required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Your email address" defaultValue={loggedInUser.email} required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="title" placeholder="Project Name" defaultValue={serviceInfo.title} required />
                        </div>
                        <div className="form-group">
                            <textarea type="text" className="form-control" name="description" rows="5" placeholder="Project Details" defaultValue={serviceInfo.description} required />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="price" placeholder="Price" defaultValue={serviceInfo.price} required />
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input onChange={handleFileChange} type="file" className="form-control-file" name="icon" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-brand mr-5 mb-5">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Order;