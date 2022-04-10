import React from 'react';

import {GiCancel , GiCheckMark} from 'react-icons/gi';

import './Card.scss';

import axios from "axios";

function Card(props){

    const currentName = localStorage.getItem("username");
    async function completedHandler(){

        console.log(props.id);
        //connect to database and change status of task to completed
        await axios.post(`http://localhost:8080/api/goal/delete/${props.id}`)

    }

    async function cancelledHandler(){
        console.log(props.id);
        //connect to database and change the task with props.id to cancelled

        await axios.delete(`http://localhost:8080/api/goal/delete/${props.id}`)

    }
    return<div className="card">

        <div className="card-cont">
            <div className="goal-info">
                {props.children}
            </div>
            
            
            <div className="options">
                <li className="options-item">
                    <button className='checkmark' onClick={completedHandler}>
                        <GiCheckMark size={30} style={{color: 'green'}}/>
                    </button>
                </li>
                <li className="options-item">
                    <button className="x-mark" onClick={cancelledHandler}>
                        <GiCancel size={30} style={{color: 'red'}}/>
                    </button>
                </li>
                

            </div>
            
        </div>
        
    </div>
}

export default Card;