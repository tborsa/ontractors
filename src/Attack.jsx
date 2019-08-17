import React from 'react';
const socket = new WebSocket('ws://localhost:8080');

let number;
const Attack = () => {

    // socket.onopen = ()=>{

    // };
    // socket.onmessage = ()=>{

    // };
    const register = (event)=>{
        number = 25;
        socket.send(JSON.stringify({type: 'register', number: '25'}));
    }
    const mouseMove = (e) =>{
        if(number){
            socket.send(JSON.stringify({type: 'move', number: number, screenX: e.screenX, screenY: e.screenY}));
        }
    }
    return (
        <div onMouseMove={mouseMove} >
            <h1 onClick={register}>Attack component 1</h1>
            <h1 onClick={register}>Attack component 2</h1>
            <h2> test</h2>
            <h2> test</h2>
            <h2> test</h2>
        </div>
    );
};

export default Attack;