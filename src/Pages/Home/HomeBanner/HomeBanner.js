import React from 'react';
import './HomeBanner.css';
import { Carousel } from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/3zJXPd5/banner-3-ff884c34.png"
                alt="First slide"
                />
                <Carousel.Caption className='carousel-text'>
                <h1>First slide label</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/1RDqKwB/banner-1-0158ff1d.png"
                alt="Second slide"
                />

                <Carousel.Caption className='carousel-text'>
                <h1>Second slide label</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/wYfwLBw/banner-4-1478080c.png"
                alt="Third slide"
                />

                <Carousel.Caption className='carousel-text'>
                <h1>Third slide label</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeBanner;