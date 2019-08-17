import React, {useReducer, useState} from 'react';
import './Us.css';

const developers = [
    {name: 'neezy', animation:"/images/testguy.png", summary: "Neezy is a full stacker lecture and amature rapper. He cant stand it got a  ", stats: { react: 8, freestyling: 9, lectures: 8}},
    {name: 'Tradvis', animation:"/images/testguy.png", summary: "Neezy is a full stacker lecture and amature rapper. He cant stand it got a  ", stats: { react: 7, freestyling: 9, lectures: 8}},
    {name: 'T', animation:"/images/testguy.png", summary: "Neezy is a full stacker lecture and amature rapper. He cant stand it got a  ",stats: { react: 8, freestyling: 9, lectures: 8}},
    {name: 'Tina', animation:"/images/testguy.png", stats: { react: 3, freestyling: 9, lectures: 8}},
];

const Us = () => {
    developers[0].index = 0;
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
        return <div onClick={()=>{newEmployee(index)}} style={{order: position}} className="person"></div>
    });

    return (
        <div className="us container">
            <div className="bg mountain"></div>
            <div className="bg buildings-back"></div>
            <div className="bg buildings-front"></div>
            <div className="bg buildings-main"></div>
            <div className="champion-preview flex row">
                <div className="champion">
                    <h2>{employee.name}</h2>
                    <div className="animation" style={{backgroundImage: "url("+employee.animation+")"}}>
                    </div>
                </div>
                <div className="champion-info flex">
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