import React, {useContext, useEffect, useState} from 'react';
import { UserContext }  from '../../UserContext';
import {TaskContext } from '../../TaskContext';


import {BsPlusCircle} from 'react-icons/bs';
import Navbar from '../../Navbar';
import './GoalPage.scss';

import Card from '../../ui/Card';
import AddGoal from './AddGoal';
import Backdrop from './Backdrop';

import axios from "axios";

function GoalPage(){

    //the following three lines need to be replaced with the setup function I have commented out
    const {user,  setUser} = useContext(UserContext);
    const { task, setTask } = useContext(TaskContext);
    var activeTasks = task;

    const currentName = localStorage.getItem('username');

    
    const [currentC, setCurrentC] = useState([]);
    const [completedC, setCompletedC] = useState([]);
    const [overdueC, setOverdueC] = useState([]);

    useEffect( ()=> {
        SetUp();
    }, []);

    async function SetUp(){
        await axios.get(`http://localhost:8080/api/goal/get-goals/${currentName}`)
            .then( res=> {

                //let completed = res.data.filter( e => e.status == 1);
                //let overdue = res.data.filter( e => e.status == 2);
                //let active = res.data.filter( e => e.status == 0);
                setCurrentC(res.data);
                //setCompletedC(completed);
                //setOverdueC(overdue);
                
        });
        
    }
    

    const [click, setClick] = useState(false);

    function handleClick(){
        
        setClick(!click);
    } 
    function newGoalHandler(){
        SetUp();
        setClick(!click);
    }

    return(
       
        <div className = "goal-page">
            <Navbar/>
            {click && <AddGoal handler = {newGoalHandler}/>}
            {click && <Backdrop onCancel={handleClick}/>}

            <div className="goal-container">
                
                <ul className="i-hate-having-to-add-this">
                    <h1 className="goal-header">Current Goals</h1>

                    <div className='add' onClick={handleClick}>
                        <BsPlusCircle size={40}/>
                    </div>
                </ul>
               
                

                <ul className='task-list'>
                    {currentC.map(function(currentC, index){
                        return <li className='task-list-item' key={index}>
                            <Card id={currentC.id}>
                                <h1 className='task-title'>{currentC.title}</h1>
                                
                            </Card>
                            
                            </li>;
                           
                    })}
                </ul>

                
            </div>
           
        </div>
          

    );


}

export default GoalPage;