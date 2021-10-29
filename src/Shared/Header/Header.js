import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Tourism</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to='/myBookings'>My bookings</Nav.Link>
                        <Nav.Link as={Link} to='/manageBookings'>Mange bookings</Nav.Link>
                        <Nav.Link as={Link} to='/addATour'>Add a tour</Nav.Link>
                        {user?.email && <span>Hello, {user.displayName}</span>}
                        {!user?.email && <button onClick={handleLogin}>Login</button>}
                        {user?.email && <button onClick={handleLogout}>Logout</button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;