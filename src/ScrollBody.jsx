import React, { Component } from 'react';
import './ScrollBody.css';
import Stack from './Stack';
import Us from './Us';
import Folio from './Folio';


const ScrollBody = () => {
    return (
        <div className="scroll-body flex">
            {/* <div className="bg-image"></div> */}
            <Stack></Stack>
            <Us></Us>
            <Folio></Folio>
        </div>
    );
}

export default ScrollBody;