import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import Testimonial from './Testimonial/Testimonial';
import Tours from './Tours/Tours';
import Trust from './Trust/Trust';

// Home page
const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tours></Tours>
            <Trust></Trust>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;