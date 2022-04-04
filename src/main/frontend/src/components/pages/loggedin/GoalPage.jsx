import React, {useContext, useState} from 'react';
import { UserContext }  from '../../UserContext';
import {TaskContext } from '../../TaskContext';


import {BsPlusCircle} from 'react-icons/bs';
import Navbar from '../../Navbar';
import './GoalPage.scss';

import Card from '../../ui/Card';
import AddGoal from './AddGoal';
import Backdrop from './Backdrop';

const GoalPage = () => {

    const {user,  setUser} = useContext(UserContext);
    const { task, setTask } = useContext(TaskContext);

    var activeTasks = task;
    

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
       
        <div className = "goal-page">
            <Navbar/>
            {click && <AddGoal/>}
            {click && <Backdrop onCancel={handleClick}/>}

            <div className="goal-container">
                
                <ul className="i-hate-having-to-add-this">
                    <h1 className="goal-header">Current Goals</h1>

                    <div className='add' onClick={handleClick}>
                        <BsPlusCircle size={40}/>
                    </div>
                </ul>
               
                

                <ul className='task-list'>
                    {activeTasks.map(function(activeTasks, index){
                        return <li className='task-list-item' key={index}>
                            <Card id={activeTasks['taskId']}>
                                <h1 className='task-title'>{activeTasks['taskTitle']}</h1>
                                
                            </Card>
                            
                            </li>;
                           
                    })}
                </ul>

                
            </div>
           
        </div>
          

    );


}

export default GoalPage;