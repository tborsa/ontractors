import React, {useState, useEffect} from 'react';
import './Folio.css';

const Folio = () => {
    let [show, setShow] = useState(false);
    // useEffect(()=>{
    //     document.getElementById('scroll').addEventListener('scroll', handleScroll);  
    //     return () => {
    //         document.getElementById('scroll').removeEventListener('scroll', handleScroll);
    //     }   
    // });
    // const handleScroll = e => {
    //     const winScroll =
    //     document.getElementById('scroll').scrollTop || document.documentElement.scrollTop   
    //     if (winScroll > window.innerHeight && !show) {
    //         console.log("sert")
    //         setShow(true);
    //     }else if( show && winScroll < window.innerHeight ){
    //         setShow(false);
    //         console.log('set false')
    //     }
    // }
    return (
        <div className="folio container flex row ParallaxContainer">
            <div className="column flex">
                <div className="preview zoom" style={{backgroundImage: `url(/images/folio1.png)`}}></div> 
                <div className="preview zoom" style={{backgroundImage: `url(/images/folio2.png)`}}></div> 
                <div className="preview zoom" style={{backgroundImage: `url(/images/folio1.png)`}}></div> 
            </div>
            <div className="column flex shift">
                <div className="preview zoom" style={{backgroundImage: `url(/images/bento.jpg)`}}></div> 
                <div className="preview info">
                        <h2>Our Work</h2>
                        <p>its what we do</p>
                </div> 
                <div className="preview zoom" style={{backgroundImage: `url(/images/bento.jpg)`}}></div> 
            </div>
            <div className="column flex shiftmore">
                <div className="preview zoom" style={{backgroundImage: `url(/images/folio2.png)`}}></div> 
                <div className="preview zoom" style={{backgroundImage: `url(/images/folio1.png)`}}></div> 
                <div className="preview zoom" style={{backgroundImage: `url(/images/folio2.png)`}}></div> 
            </div>
        </div>
        
    );
};

export default Folio;