import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({});

    const handleBlur = e => {
        const newInfo = { ...admin };
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }

    const handleSubmit = (event) => {
        const formData = new FormData()
        formData.append('email', admin.email);

        fetch('https://nameless-island-05634.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Admin added successfully');
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
                    <h2 className="navbar-brand">Make Admin</h2>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <h5>{loggedInUser.name}</h5>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="pt-5 pl-5 h-100" style={{ backgroundColor: "#F4FDFB" }}>
                    <form className="form-inline h-50 pt-3 pl-5 bg-white mr-5 rounded-lg" onSubmit={handleSubmit}>
                        <div className="col-12 pt-0 mb-3">
                            <label className="float-left" htmlFor="exampleInputEmail1">Email</label>
                        </div>
                        <div className="form-group mx-sm-2 mb-2 w-50" style={{ marginTop: -165 }} >
                            <input onBlur={handleBlur} type="email" className="form-control w-100" name="email" placeholder="jon@gamil.com" required />
                        </div>
                        <div className="mb-2" style={{ marginTop: -165 }} >
                            <button type="submit" className="btn btn-dashboard-brand">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;