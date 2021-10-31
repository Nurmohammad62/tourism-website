import React from 'react';
import './Tour.css';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const Tour = ({tour}) => {
    const {_id, title, description, price, img_url} = tour;
    const booking_icon = <FontAwesomeIcon icon={faBook} />
    const history = useHistory();

    const handlebooking = id => {
        history.push(`/booking/${id}`)
    }
    return (
        <Col sm={12} md={6} lg={4}>
            <Card>
                <Card.Img variant="top" src={img_url} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description.slice(0, 200)}
                </Card.Text>
                <h3><span className='tour-price'>${price}</span> <span className='tour-person'>/ 3 person</span></h3>
                <button onClick={() => handlebooking(_id)} className='btn-booking'>{booking_icon} Book this tour</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Tour;