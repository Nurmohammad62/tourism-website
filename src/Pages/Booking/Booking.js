import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Booking.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const {tourId} = useParams();
    const {user} = useAuth();
    const [tour, setTour] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();

    useEffect(() => {
        axios.get(`https://warm-meadow-52876.herokuapp.com/tour/${tourId}`)
        .then(result => {
            console.log(result.data);
            setTour(result.data);
        })
    }, []);

    const onSubmit = data => {
        data.status = 'Pending';
        console.log(data);
        axios.post('https://warm-meadow-52876.herokuapp.com/booking', data)
        .then(result => {
            console.log(result);
            if(result){
                alert('Booking successfull');
                reset();
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
                    <p>{tour?.description}</p>
                </Col>
                <Col className='booking-form'>
                    <h2 className='text-center'>Please book your tour here</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={tour.title} {...register("tour_name", { required: true})} />
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder='Your name'/>
                        <input defaultValue={user.email} type='email' {...register("email")} placeholder='Your email'/>
                        <textarea {...register("address", { required: true, maxLength: 150 })} placeholder='Your address'/>
                        <input type="number" {...register("contact")} placeholder='Phone number'/>
                        <input className='btn-booking' type="submit" value='Book Now' />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;