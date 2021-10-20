import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import image from '../../images/Login-pana.png';

const Login = () => {
    const { signInUsingGoogle,handleUserRegister,handleUserLogin, } = useAuth();

    
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }


    const handleEmail = (e) => {
        setEmail(e.target.value);
    } 

    const handlePassword = (e) => {
        setPassword(e.target.value);
    } 

    const handleRegister = () => {
        handleUserRegister(email, password);
      };
    
      const handleLogin = () => {
        handleUserLogin(email, password);
      };




    return (
        <div className="container my-5">
            <h1 className="text-center fw-bold my-5">Please log in</h1>
            <div className="row">
                <div className="col-md-6 shadow-lg p-5 rounded">
                <div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class ="form-text text-danger">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button onClick={handleRegister} type="submit" className="btn btn-primary me-3">Registration</button>
                <button onClick={handleLogin} type="submit" className="btn btn-primary">Login</button>
            </div>
            <div className="mt-5 text-center">
            <button onClick={handleGoogleLogin} className="btn btn-success"><span className="text-warning"><i className="fab fa-google"></i></span> Google Sign In</button>
            </div>
                </div>
                <div className="col-md-6">
                    <img src={image} className="w-100" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;