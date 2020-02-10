import React, {useEffect, useRef} from 'react';
import './Pane.css';

const Hero = () => {

    return (
        <div className="pane container white flex row ParallaxContainer">
            <div className="background"></div>
            <div className="block">
                <div className="title">
                    Web development is what we do. 
                </div>
                <p>
                    We are a community focsed Vancouver based web development shop looking to help get your next idea off the ground. 
                </p>
                <button>
                    Get to Know us
                </button>
            </div>
        </div>
    );
};

export default Hero;