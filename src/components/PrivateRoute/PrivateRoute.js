import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,loading}= useAuth();
    if(loading){
        return <div className="d-flex justify-content-center mt-5"><Spinner animation="grow" variant="success" /></div>
    }
    return (
        <Route
        {...rest}
        render={({location})=>user.email? (children): (<Redirect
            to={{
                pathname: "/login",
                state: { from: location }
              }}
        ></Redirect>)}
        />
            
        
    );
};

export default PrivateRoute;