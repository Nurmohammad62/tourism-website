import React from 'react';
import './Trust.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBreadSlice, faBus, faAmericanSignLanguageInterpreting, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

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
                        <h1>{guide_icon}</h1>
                        <h4>2000+ Our worldwide guide</h4>
                    </div>
                    <div className="achiv">
                        <h1>{travel_icon}</h1>
                        <h4>100% trusted travel agency</h4>
                    </div>
                    <div className="achiv">
                        <h1>{experiance_icon}</h1>
                        <h4>10+ year of travel experience</h4>
                    </div>
                    <div className="achiv">
                        <h1>{happy_icon}</h1>
                        <h4>90% of our traveller happy</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trust;