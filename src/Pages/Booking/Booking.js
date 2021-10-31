import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './Booking.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const {tourId} = useParams();
    const {user} = useAuth();
    const [tour, setTour] = useState({});
    const history = useHistory();
    const tourRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const dateRef = useRef();

    useEffect(() => {
        axios.get(`https://warm-meadow-52876.herokuapp.com/tour/${tourId}`)
        .then(result => {
            console.log(result.data);
            setTour(result.data);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tour_name = tourRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const contact = addressRef.current.value;
        const date = dateRef.current.value;

        const data = {tour_name, name, email, address, contact, date};
        data.status = 'Pending';
        console.log(data);
        axios.post('https://warm-meadow-52876.herokuapp.com/booking', data)
        .then(result => {
            console.log(result);
            if(result){
                alert('Booking successfull');
                e.target.reset();
                history.push('/home');
            }
        })
    };

    return (
        <Container className='section-booking'>
            <Row sm={1} lg={2}>
                <Col className='tour-column'>
                    <h2 className='mb-3'>{tour?.title}</h2>
                    <img className='img-fluid mb-3' src={tour?.img_url} alt="Tour pic" />
                    <p>Price: <span className='fw-bold'>${tour?.price}</span> / 3 person</p>
                    <p>{tour?.description}</p>
                </Col>
                <Col className='booking-form'>
                    <h2 className='text-center'>Please book your tour here</h2>
                    <form onSubmit={handleSubmit}>
                        <input name='tour_name' ref={tourRef} value={tour.title} required/>
                        <input name='name' ref={nameRef} value={user?.displayName} required/>
                        <input type='email' ref={emailRef} value={user?.email} required/>
                        <textarea name='address' ref={addressRef} placeholder='Your address' required/>
                        <input type="number" ref={phoneRef} placeholder='Phone number' required/>
                        <input type="date" name="date" ref={dateRef} placeholder='Booking date' required/>
                        <input className='btn-booking' type="submit" value='Book Now' required/>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;