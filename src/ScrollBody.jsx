import React, { Component } from 'react';
import './ScrollBody.css';
import Stack from './Stack';
import Us from './Us';
import Folio from './Folio';
import Paint from './Paint';


const ScrollBody = () => {
    return (
        <div className="scroll-body flex" id="scroll">
            {/* <div className="bg-image"></div> */}
            <Stack></Stack>
            <Us></Us>
            <Folio></Folio>
            <Paint></Paint>
        </div>
    );
}

export default ScrollBody;