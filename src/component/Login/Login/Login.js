import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import GoogleIcon from '../../../images/google.png';
import { UserContext } from '../../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, photo: photoURL }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <div className="container text-center">
            <Link className="navbar-brand pt-5 pb-5" to="/"><img style={{ height: 50 }} src={logo} alt="" /></Link>
            <div className="card w-50 m-auto border-secondary pt-5 pb-5">
                <div className="card-body">
                    <h2 className="card-title pt-5 pb-4">Login With</h2>
                    <div className="border rounded-pill w-75 m-auto overflow-hidden">
                        <img style={{ width: '43px', float: 'left', margin: '5px' }} src={GoogleIcon} alt="" />
                        <button onClick={handleGoogleSignIn} className="btn m-2">Continue with Google</button>
                    </div>
                    <p className="card-text pt-3 pb-5">Don’t have an account? <a style={{ color: '#3F90FC', textDecoration: 'underline' }} href="/#">Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;