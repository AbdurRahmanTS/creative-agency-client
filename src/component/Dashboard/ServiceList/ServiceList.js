import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import Sidebar from '../Sidebar/Sidebar';
import UserServiceList from '../UserServiceList/UserServiceList';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceListData, setServicesListData] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    
    // const email = serviceListData.find(userService => userService.email === loggedInUser.email)

    useEffect(() => {
        fetch('https://nameless-island-05634.herokuapp.com/servicesList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setServicesListData(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://nameless-island-05634.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    

    
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5 h-100" style={{ position: "absolute", right: 0 }}>
                <nav className="navbar navbar-expand-lg navbar-light ml-5 mt-4">
                    <h2 className="navbar-brand">Service list</h2>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <h5>{loggedInUser.name}</h5>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row p-5 w-100 h-100" style={{ position: "absolute", backgroundColor: "#F4FDFB" }}>

                    {
                        isAdmin ? <AdminServiceList serviceListData={serviceListData} ></AdminServiceList>
                            : serviceListData.map(serviceList => <UserServiceList key={serviceList._id} serviceList={serviceList}></UserServiceList>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceList;