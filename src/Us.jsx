import React, {useReducer, useState, useRef} from 'react';
import './Us.css';

const developers = [
    {name: 'neezy', animation:"/images/nima.png", summary: "Neezy is a full stacker lecture and amature rapper.   ", stats: { react: 8, freestyling: 9, lectures: 8}},
    {name: 'Tradvis', animation:"/images/travis.png", summary: "Neezy is a full stacker lecture and amature rapper.   ", stats: { react: 7, freestyling: 9, lectures: 8}}
];

const Us = () => {
    developers[0].index = 0;
    const mountain = useRef(null);
    var images = mountain.current;
    let timer = () =>{
        setInterval(()=>{
            setEmployee((employee) => {
                const newNum = (employee.index+1)%developers.length;
                developers[newNum].index = newNum;
                return developers[newNum];
            });
            setWindowStart((windowStart) => {return (windowStart+1)%developers.length});
        },5000);
        return 0;
    } 
    let [employee, setEmployee] = useState(developers[0]);
    let [windowStart, setWindowStart] = useState(timer);
    const newEmployee = (number)=>{
        developers[number].index = number;
        setEmployee(developers[number]);
    }
    const back = ()=>{
        setWindowStart((windowStart-1)%developers.length);
    };
    const forward = ()=>{
        setWindowStart((windowStart+1)%developers.length);
    };
    let stats = Object.keys(employee.stats).map((stat)=>{
        return(
            <div className="stat flex">
                <h4>{stat}</h4>
                <div className="bar outer">
                    <div className="bar inner" style={{width: employee.stats[stat]+"0%"}}>
                    </div>
                </div>
            </div>
        )
    })
    let employees = developers.map((developer, index)=>{
        let position = 0;
        if(windowStart<=index){
            position = -windowStart;
        }
        return <div onClick={()=>{newEmployee(index)}} style={{order: position}} style={{backgroundImage: "url("+developer.animation+")"}} className="person pixel"></div>
    });

    return (
        <div className="us container">
            <div className="bg pixel mountain ParallaxContainer" ref={mountain} ></div>
            <div className="bg pixel buildings-back ParallaxContainer-mid"></div>
            <div className="bg pixel buildings-front ParallaxContainer-close"></div>
            <div className="bg pixel buildings-main"></div>
            <div className="champion-preview flex row">
                <div className="champion">
                    <div className="animation pixel" style={{backgroundImage: "url("+employee.animation+")"}}>
                    </div>
                </div>
                <div className="champion-info flex">
                    <h1>{employee.name}</h1>
                    <div className="choices">
                        {/* <h1 onClick={back}>{'<'}</h1> */}
                        <div className="persons flex row">
                            {employees}
                        </div>
                        {/* <h1 onClick={forward}>{'>'}</h1> */}
                    </div>
                    <div className="stats">
                       {stats}
                    </div>
                    <div className="summary">
                        {employee.summary}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Us;