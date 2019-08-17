import React, { useEffect, useState } from 'react';
import './Menu.css';


const Menu = (props) => {
    let [initialHeight, setInitialHeight] = useState('');
    let [height, setHeight] = useState({});
    let [bottom, setBottom] = useState({bottom: 0});
    useEffect(()=>{
        setInitialHeight(document.getElementById('clear').clientHeight);
        window.addEventListener('scroll', handleScroll);  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }   
    }, [initialHeight]);
    const handleScroll = e => {
        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop 
        let diffOne = window.innerHeight - winScroll - initialHeight; 
        let diffTwo = window.innerHeight*2 - winScroll - initialHeight; 
        console.log(diffOne)
        if(props.theme === 'dark'){
            if (diffOne>0 || -diffTwo > initialHeight){
                setHeight({height: 0});
            }else if(diffOne<=0 && diffOne>-initialHeight){
                console.log("topone")
                setBottom({bottom: 0});
                setHeight({height: -diffOne, top: initialHeight+diffOne});
            }else if (diffTwo < 0) {
                setBottom({});
                setHeight({height: initialHeight + diffTwo});
            }else{
                console.log("full height", initialHeight);
                setHeight( {height: initialHeight});
            }
        }else if(props.theme ==='light'){
            if (diffTwo>0){
                setHeight({height: 0});
            }else if(diffTwo<=0 && diffTwo>-initialHeight){
                console.log("topone")
                setBottom({bottom: 0});
                setHeight({height: -diffTwo, top: initialHeight+diffTwo});
            }else{
                console.log("full height", initialHeight);
                setHeight( {height: initialHeight});
            }
        }
    }
    return (
            <div className='fixed menu-holder' id={props.theme} style={height}>
                    <div className="menu flex" style={bottom}>
                        <div className="logo">\ontractors</div>
                        <div className="contact">Let's Talk<span>!</span></div>
                    </div>
            </div>
        );
    }
    
    export default Menu;