import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (event) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('price', info.price);

        fetch('https://nameless-island-05634.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Service added successfully');
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
                    <h2 className="navbar-brand">Add Service</h2>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <h5>{loggedInUser.name}</h5>
                            </li>
                        </ul>
                    </div>
                </nav>
                <form onSubmit={handleSubmit} style={{ backgroundColor: "#F4FDFB", height: "100%", overflow: "hidden" }}>
                    <div className="form-row">
                        <div className="col-md-6 mb-3 p-5">
                            <div className="form-group">
                                <label htmlFor="exampleInputName1">Service Title</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter title" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputTextarea1">Description</label>
                                <textarea onBlur={handleBlur} type="text" className="form-control" name="description" rows="5" placeholder="Enter designation" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPrice1">Price</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Enter price" required />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3 p-5">
                            <div className="form-group">
                                <label htmlFor="exampleInputFile1">Icon</label>
                                <input onChange={handleFileChange} type="file" className="form-control-file" name="icon" required />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dashboard-brand float-right mr-5 mb-5">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;