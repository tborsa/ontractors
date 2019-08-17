import React, {useReducer} from 'react';
import './Battles.css';
const socket = new WebSocket('ws://localhost:8080');

const Arena = () => {
    const reducers = {
        attack : (state, action)=>{
            return {
                ...state,
                health: state.health - action.value, 
                attacked: true
            };
        },
        changePokemon : (state, action)=>{
            return {
                ...state,
                number: action.value
            };
        },
        animOff : (state, action) =>{
            return{
                ...state, 
                attacked: false
            }
        },
        position: (state,action)=>{
            return{
                ...state,
                screenX: action.value.screenX,
                screenY: action.value.screenY
            } 
        },
        register: (state, action) => {
            return{
                health: 100,
                number: action.number,
                screenX: 0,
                sceenY: 0,
                attacked: false
            }
        }

    }
    const dispatch = (state, action)=>{
        return {...state, [action.number]: reducers[action.type](state[action.number], action)};
    }

    const [pokemon, dispatchPokemon] = useReducer(dispatch, {})
   
    socket.onopen = ()=>{
        console.log("Connected");
        socket.send(JSON.stringify({type: 'arena'}));
    };
    socket.onmessage = (message)=>{
        let data = JSON.parse(message.data);
        if(data.type === 'move'){
            dispatchPokemon({type: 'position', number: data.number, value: {screenX: data.screenX, screenY: data.screenY}});
        }else if (data.type === 'register'){
            dispatchPokemon({type: 'register', number: data.number});
        }
    };
    const effect = (  
        <div className="attack">
            <img alt="attackanim" src="/attack.gif"></img>
        </div> 
    )
    const pokemonComp = Object.keys(pokemon).map((num)=>{
        return(
            <div className={pokemon[num].health>0 ? "opponent" : "hide"} style={{top: pokemon[num].screenY, left: pokemon[num].screenX}}>
                <img src={`/animated/${pokemon[num].number}.gif`}></img>
                <div className="healthbar">
                    <div className="inner" style={{width: pokemon[num].health+"%"}}></div>
                </div>
                { pokemon[num].attacked ? effect : null }
            </div>
        );
    })
    return (
        <div className="battle arena">
            {pokemonComp}
        </div>
    );
};

export default Arena;