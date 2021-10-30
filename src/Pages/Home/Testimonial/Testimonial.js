import React from 'react';
import './Testimonial.css';
import reviewer1 from '../../../images/reviewer-1.png';
import reviewer2 from '../../../images/reviewer-2.png';
import reviewer3 from '../../../images/reviewer-3.png';

const Testimonial = () => {
    return (
        <div className='section-testimonial'>
            <h5>Our Traveller Say</h5>
            <h1>What Our Traveller Say About Us</h1>
            <div className='testimonials'>
                <div className="testimonial-box">
                    <img src={reviewer1} alt="Reviewer" />
                    <h2>Dina james</h2>
                    <small>Traveller</small>
                    <p>"Faena Hotel Miami Beach features 179 guestrooms and suites conceived by Alan Faena and designed by award-winning film director/producer Baz Luhrmann and four-time Academy Award(R)-winning production and costume designer Catherine Martin."</p>
                </div>
                <div className="testimonial-box">
                    <img src={reviewer2} alt="Reviewer" />
                    <h2>Jahid Hassan</h2>
                    <small>Traveller</small>
                    <p>"An Art Deco landmark in the heart of South Beach, our iconic oceanfront resort offers exceptionally chic design and everything your lifestyle deserves - from leisure to dining to entertainment. With a vintage Miami aesthetic"</p>
                </div>
                <div className="testimonial-box">
                    <img src={reviewer3} alt="Reviewer" />
                    <h2>Shawon Paul</h2>
                    <small>Traveller</small>
                    <p>"Portola Hotel & Spa is California’s premier family-friendly destination offering easy access to Monterey’s most popular attractions. Leading the way as the Central Coast’s first LEED® Certified hotel."</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;