import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageAllBookings.css';
import { Col, Container, Row } from 'react-bootstrap';

// Manage all bookings page
const ManageAllBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [statusPosition, setStatusPosition] = useState(null);
    const [status, setStatus] = useState('');

    const handleStatus = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    }
    // method to update booking status
    const handleUpdateStatus = id => {
        console.log(status);
        const newStatus = {status};
        axios.put(`https://warm-meadow-52876.herokuapp.com/allBookings/${id}`, newStatus)
        .then(res => {
            console.log(res);
            if(res.data.acknowledged){
                alert('Status Updated');
                setStatusPosition(false);
            }
        })
    }
    // useEffect for load all bookings with axios
    useEffect(() => {
        axios.get('https://warm-meadow-52876.herokuapp.com/allBookings')
        .then(res => {
            setBookings(res.data);
        })
    }, [statusPosition]);
    // Delete method to delete a booking
    const handleDelete = id => {
        const permission = window.confirm('Are you sure, want to delete the booking?')
        if(permission){
            axios.delete(`https://warm-meadow-52876.herokuapp.com/deleteBooking/${id}`)
            .then(res => {
                const dataDelete = res.data.deletedCount;
                if(dataDelete) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    return (
        <Container className='manage-bookings'>
            <h1 className='text-center'>All Bookings</h1>
            <Row sm={1} md={2} lg={3} className='g-4'>
                {
                    bookings.map(booking => <Col className='booking-manage' key={booking._id}>
                        <p>Tour: {booking.tour_name}</p>
                        <p>Name: {booking.name}</p>
                        <p>Email: {booking.email}</p>
                        <p>Phone: {booking.contact}</p>
                        <p>Booking Date: {booking?.date}</p>
                        <p>Status: {booking.status}</p>
                        
                        {/* Booking status change options */}
                        <div>
                            <select onChange={handleStatus}>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Processing">Processing</option>
                                <option value="Clear">Clear</option>
                            </select>
                            <button onClick={() => handleUpdateStatus(booking._id)} className='btn-update'>Update Status</button>
                        </div>
                        <button onClick={() => handleDelete(booking._id)} className='btn-delete'>Delete Booking</button>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default ManageAllBookings;