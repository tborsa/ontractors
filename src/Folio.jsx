import React, {useState, useEffect} from 'react';
import './Folio.css';

const Folio = () => {
    let [show, setShow] = useState(false);
    useEffect(()=>{
        console.log("youou")
        window.addEventListener('scroll', handleScroll);  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }   
    });
    const handleScroll = e => {
        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop   
        if (winScroll > window.innerHeight && !show) {
            console.log("sert")
            setShow(true);
        }else if( show && winScroll < window.innerHeight ){
            setShow(false);
            console.log('set false')
        }
    }
    return (
        <div>
            <div style={{visibility: show? "visible" : 'hidden'}}className="folio container flex row">
                <div className="column flex">
                    <div className="preview zoom" style={{backgroundImage: `url(/images/AssetStore-floating.jpg)`}}></div> 
                    <div className="preview zoom" style={{backgroundImage: `url(/images/bento.jpg)`}}></div> 
                    <div className="preview zoom" style={{backgroundImage: `url(/images/AssetStore-floating.jpg)`}}></div> 
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
                    <div className="preview zoom" style={{backgroundImage: `url(/images/bento.jpg)`}}></div> 
                    <div className="preview zoom" style={{backgroundImage: `url(/images/AssetStore-floating.jpg)`}}></div> 
                    <div className="preview zoom" style={{backgroundImage: `url(/images/bento.jpg)`}}></div> 
                </div>
            </div>
            <div className="container" onScroll={handleScroll}></div>
        </div>
        
    );
};

export default Folio;