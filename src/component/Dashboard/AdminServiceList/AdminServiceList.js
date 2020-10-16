import React from 'react';

const AdminServiceList = ({ serviceListData }) => {
    const handleChange = (id, e) => {
        fetch(`http://localhost:5000/updateOrder/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: e.target.value })
        })
            .then(response => response.json())
            .then(data => {
                
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email ID</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Details</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                {
                    serviceListData.map((service) =>
                        <tbody key={service._id}>
                            <tr>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.title}</td>
                                <td style={{ width: '40%' }}>{service.description}</td>
                                <td>
                                    <select value={service.status} onChange={(e) => handleChange(service._id, e)}>
                                        <option value="Pending">Pending</option>
                                        <option value="On going">On going</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default AdminServiceList;