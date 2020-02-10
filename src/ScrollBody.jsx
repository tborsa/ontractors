import React, { Component } from 'react';
import './ScrollBody.css';
import Hero from './Hero';
import Stack from './Stack';
import Us from './Us';
import Folio from './Folio';
import Paint from './Paint';


const ScrollBody = () => {
    return (
        <div className="scroll-body flex" id="scroll">
            {/* <div className="bg-image"></div> */}
            <Hero></Hero>
            <Us></Us>
            <Folio></Folio>
            <Stack></Stack>
            <Paint></Paint>
        </div>
    );
}

export default ScrollBody;