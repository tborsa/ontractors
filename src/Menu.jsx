import React, { useEffect, useState } from 'react';
import './Menu.css';


const Menu = (props) => {
    let [initialHeight, setInitialHeight] = useState('');
    let [height, setHeight] = useState({});
    let [bottom, setBottom] = useState({bottom: 0});
    useEffect(()=>{
        setInitialHeight(document.getElementById('clear').clientHeight);
        document.getElementById('scroll').addEventListener('scroll', handleScroll);  
        return () => {
            document.getElementById('scroll').removeEventListener('scroll', handleScroll);
        }   
    }, [initialHeight]);
    const handleScroll = e => {
        const winScroll =
        document.getElementById('scroll').scrollTop || document.documentElement.scrollTop 
        let diffOne = window.innerHeight - winScroll - initialHeight; 
        let diffTwo = window.innerHeight*2 - winScroll - initialHeight; 
        if(props.theme === 'dark'){
            if (diffOne>0 || -diffTwo > initialHeight){
                setHeight({height: 0});
            }else if(diffOne<=0 && diffOne>-initialHeight){
                setBottom({bottom: 0});
                setHeight({height: -diffOne, top: initialHeight+diffOne});
            }else if (diffTwo < 0) {
                setBottom({});
                setHeight({height: initialHeight + diffTwo});
            }else{
                setHeight( {height: initialHeight});
            }
        }else if(props.theme ==='light'){
            if (diffTwo>0){
                setHeight({height: 0});
            }else if(diffTwo<=0 && diffTwo>-initialHeight){
                setBottom({bottom: 0});
                setHeight({height: -diffTwo, top: initialHeight+diffTwo});
            }else{
                setHeight( {height: initialHeight});
            }
        }
    }
    return (
            <div className='fixed menu-holder' id={props.theme} style={height}>
                <div className="info-bar"> <span>Come work with us! &nbsp;<a href="#">here</a></span><a className="contact" href="#">Let's Talk!</a> </div>
                <div className="menu flex" style={bottom}>
                    <div className="logo"></div>
                    <div className="contact">Let's Talk<span>!</span></div>
                </div>
            </div>
        );
    }
    
    export default Menu;