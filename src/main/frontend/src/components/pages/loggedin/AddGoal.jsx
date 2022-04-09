import React, {useState, useRef} from 'react';
import './AddGoal.scss';
import axios from "axios";


function AddGoal(props){

    const currentName = localStorage.getItem('username');

    const titleRef = useRef();
    const periodRef = useRef();
    const frequencyRef = useRef();

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
            period: periodRef.current.value,
            frequency: frequencyRef.current.value
        }

        //await axios.post(`/${currentName}`, data);
        props.handler();

    }
    const [check, setCheck] = useState(false);

    function checkHandler(){
        setCheck(!check);
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

                <div className="recur">
                    <label className="label">Is this a recurring goal?</label>
                    <input id="checkbox" type='checkbox' onClick={checkHandler}/>
                   
                    {check &&  
                    <div>

                        <div className= "length">

                            <label className='label'>How many days will the goal repeat for?</label>
                            <input id='period' type="number" ref={periodRef}/>
                        </div>
                        <div className= "length">
                            <label className='label'>How often will the goal repeat (in days)?</label>
                            <input id='frequency' type="number" ref={frequencyRef}/>
                        </div>
                    </div>
                    }
                   
                </div>

                <div className='create-goal'>
                    <button onClick={submitGoal} id="submitButton">Create Goal!</button>
                </div>
                

            </form>
        </div>
    )

}

export default AddGoal;