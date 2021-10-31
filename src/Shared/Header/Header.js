import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo/logo.png';

const Header = () => {
    const history = useHistory();
    const {user, logOut} = useAuth();
    const handleLogin = () => {
        history.push('/login');
    }
    const handleLogout = () => {
        logOut();
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" className='main-navbar'>
            <Container>
                <Navbar.Brand as={Link} to="/home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav">
                        <Nav.Link as={Link} style={{color:'#fff'}} to="/home">Home</Nav.Link>
                        {user?.email && <Nav.Link as={Link} style={{color:'#fff'}} to='/myBookings'>My bookings</Nav.Link>}
                        {user?.email && <Nav.Link as={Link} style={{color:'#fff'}} to='manageBookings'>Mange bookings</Nav.Link>}
                        {user?.email && <Nav.Link as={Link} style={{color:'#fff'}} to='/addATour'>Add a tour</Nav.Link>}
                        {user?.email && <span className='navbar-username' >Hello, {user.displayName}</span>}
                        {!user?.email && <button className='btn-log' onClick={handleLogin}>Login</button>}
                        {user?.email && <button className='btn-log' onClick={handleLogout}>Logout</button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;