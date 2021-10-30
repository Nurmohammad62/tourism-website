import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MyBookings.css';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBookings = () => {
    const {user} = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    const email = user.email;
    useEffect(() => {
        axios.get(`https://warm-meadow-52876.herokuapp.com/myBookings/${email}`)
        .then(result => {
            setMyBookings(result.data);
        })
    },[]);

    const handleDelete = id =>{
        const permission = window.confirm("Are you sure want to cancel the booking");
        if(permission){
            axios.delete(`https://warm-meadow-52876.herokuapp.com/deleteBooking/${id}`)
            .then(res => {
                const deleted = res.data.deletedCount;
                if(deleted){
                    const remaining = myBookings.filter(booking => booking._id !== id);
                    setMyBookings(remaining);
                }
            })
        }
    }
    return (
        <div>
            <Container className='mybookings-container'>
                <Row sm={1} md={2} lg={3} className='g-4'>
                    {
                        myBookings.map(myBooking => <Col className='p-3 border' key={myBooking._id}>
                            <h4>Tour name: {myBooking.tour_name}</h4>
                            <p>Email: {myBooking.email}</p>
                            <p>Status: {myBooking.status}</p>
                            <button onClick={() => handleDelete(myBooking._id)} className='btn btn-danger'>Cancel Booking</button>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyBookings;