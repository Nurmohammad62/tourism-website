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
                <h1 className='text-white'>Western Express Northbound</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/1RDqKwB/banner-1-0158ff1d.png"
                alt="Second slide"
                />

                <Carousel.Caption className='carousel-text'>
                <h1 className='text-white'>Gourmet Journey of Emilia Romagna</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/wYfwLBw/banner-4-1478080c.png"
                alt="Third slide"
                />

                <Carousel.Caption className='carousel-text'>
                <h1 className='text-white'>Journey of Alps & Italy Northern Lakes</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeBanner;