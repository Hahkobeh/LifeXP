import React, {useState, useRef} from 'react';
import './AddGoal.scss';
import axios from "axios";


function AddGoal(props){

    const currentName = localStorage.getItem('username');

    const titleRef = useRef();
    const dateRef = useRef();
    

    const [noTitle, setNoTitle] = useState(false);
    const [noDifficulty, setNoDifficulty] = useState(false);

    const [click, setClick] = useState(0);


    async function submitGoal(){
        
        setNoTitle(false);
        setNoDifficulty(false);

        if(titleRef.current.value === ''){
            setNoTitle(true);
            return;
        }else if(click === 0){
            setNoDifficulty(true);
            return;
        }
        
        let data = { 
            username: currentName,
            title: titleRef.current.value,
            difficulty: click,
            date: dateRef.current.value.toString()
        }

        //await axios.post(`/${currentName}`, data);
        props.handler();

    }
   

    const handleClick1= () => setClick(1);
    const handleClick2= () => setClick(2);
    const handleClick3= () => setClick(3);
    const handleClick4= () => setClick(4);
    const handleClick5= () => setClick(5);

    return(
        <div className="new-goal">
            
            <h1 className="Q">Create New Goal!</h1>
            <hr/>

            <form className="new-goal-form" >
                
                <div className="goal-name">
                    <label className="label">What is your goal?</label>
                    <input id="title" type='text' ref={titleRef}/>
                   
                   
                </div>

                {noTitle && <p className='error'>You must name your goal</p>}

                <div className="rating-system">
                    <h2>How difficult is the goal?</h2>
                    <div className={click === 1 ? "circle selection" : "circle"} onClick={handleClick1}>1</div>
                    <div className={click === 2 ? "circle selection" : "circle"} onClick={handleClick2}>2</div>
                    <div className={click === 3 ? "circle selection" : "circle"} onClick={handleClick3}>3</div>
                    <div className={click === 4 ? "circle selection" : "circle"} onClick={handleClick4}>4</div>
                    <div className={click === 5 ? "circle selection" : "circle"} onClick={handleClick5}>5</div>
                </div>

                {noDifficulty && <p className='error'>Please enter a difficulty</p>}

                <div className="finish-by">
                    <label for="start">Complete Goal By: </label>
                    <input ref = {dateRef} type="date" id="start" name="trip-start" min="2022-04-09" max="2030-12-31"></input>
                </div>
                

                <div className='create-goal'>
                    <button onClick={submitGoal} id="submitButton">Create Goal!</button>
                </div>
                

            </form>
        </div>
    )

}

export default AddGoal;