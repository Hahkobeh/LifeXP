import React from 'react';

import {GiBowlingPropulsion, GiCancel , GiCheckMark} from 'react-icons/gi';

import './Card.scss';

import axios from "axios";

function Card(props){

    const currentName = localStorage.getItem("username");
    async function completedHandler(){
        
        await axios.put(`http://localhost:8080/api/goal/complete/${props.id}`)
        props.reset();
    }

    async function cancelledHandler(){
        
        await axios.delete(`http://localhost:8080/api/goal/delete/${props.id}`)
        props.reset();
    }
    if(props.status === 1){
        return<div className="card c">
            <h1 className = 'task-title-c'>{props.title}</h1>
            <h3 className = 'date'>Completed By: {props.date}</h3>
        </div>
    }else{
        return<div className={props.status === 2 ? "card overdue": "card"}>
            
            <div className= 'goal-title'>
                <h1 className = 'task-title'>{props.title}</h1>
                <h3 className = {props.status === 2 ? 'late date' : 'date'}>Do By: {props.date}</h3>
            </div>

            <div className="options">
                <button className='checkmark' onClick={completedHandler}>
                    <GiCheckMark size={30} style={{color: 'green'}}/>
                </button>
                <button className="x-mark" onClick={cancelledHandler}>
                    <GiCancel size={30} style={{color: 'red'}}/>
                </button>

            </div>
            
        </div>
    }
    
}

export default Card;