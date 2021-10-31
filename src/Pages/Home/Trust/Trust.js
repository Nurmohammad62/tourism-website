import React from 'react';
import './Trust.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBreadSlice, faBus, faAmericanSignLanguageInterpreting, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

// Trust component for homepage
const Trust = () => {
    const guide_icon = <FontAwesomeIcon icon={faBreadSlice} />
    const travel_icon = <FontAwesomeIcon icon={faBus} />
    const experiance_icon = <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} />
    const happy_icon = <FontAwesomeIcon icon={faSmileBeam} />
    return (
        <div className='section-trust'>
            <div className='overlay'>
                <h5 className='text-center'>Why turism</h5>
                <h1 className='text-center'>Why You Are Travel With Tourism</h1>
                <div className="achiv-box">
                    <div className="achiv">
                        <i className='icon'>{guide_icon}</i>
                        <h4>2000+ Our worldwide guide</h4>
                    </div>
                    <div className="achiv">
                        <i className='icon'>{travel_icon}</i>
                        <h4>100% trusted travel<br/> agency</h4>
                    </div>
                    <div className="achiv">
                        <i className='icon'>{experiance_icon}</i>
                        <h4>10+ year of travel<br/> experience</h4>
                    </div>
                    <div className="achiv">
                        <i className='icon'>{happy_icon}</i>
                        <h4>90% of our traveller<br/> happy</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trust;