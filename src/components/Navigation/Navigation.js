import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
    const {user,logOut} = useAuth();
    return (
        <>
            <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="d-inline-block align-top" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="fw-bold text-dark" as={Link} to="/home">Home</Nav.Link>
                        {user.email && 
                            <Nav.Link className="fw-bold text-dark" as={Link} to="/services">Services</Nav.Link>
                        }
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/about">About</Nav.Link>

                       {user?.email ?
                       <Button onClick={logOut} variant="light">LogOut</Button>
                            :
                            <Nav.Link className="fw-bold text-dark" as={Link} to="/login">Login</Nav.Link>
                            
                       }
                        <Navbar.Text>
                            <li className="log">Signed in as: <a href="#login">{user?.displayName}</a></li>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;