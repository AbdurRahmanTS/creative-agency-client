import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/"><img style={{ height: 50 }} src={logo} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/serviceList">Service List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="#">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="#">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="#">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                    {
                        loggedInUser.name ? <h5 className="pt-2">{loggedInUser.name}</h5>
                            : <Link style={{ width: '100%' }} className="nav-link mr-5 btn-brand" to="/login"> Login</Link>
                    }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;