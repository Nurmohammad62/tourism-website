import axios from 'axios';
import './Tours.css';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        axios.get('https://warm-meadow-52876.herokuapp.com/tours')
        .then(result => {
            console.log(result.data);
            setTours(result.data);
        })
    },[])
    return (
        <div className='mb-5'>
            <h1 className='tours-section-heading'>Our Tours</h1>
                    <Row className='g-4 ms-5 me-5'>
                    {
                        tours.map(tour => <Tour 
                            key={tour._id}
                            tour={tour}
                            ></Tour>)
                    }
                    </Row>
        </div>
    );
};

export default Tours;