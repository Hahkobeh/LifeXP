import React from 'react';
import './Main.scss';
import { useNavigate } from 'react-router-dom';
const Main = () => {

    let navigate = useNavigate();

    const signInHandler = () =>{
        navigate('/signin');
    }

    const registerHandler = () =>{
        navigate('/register');
    }

    return(
        

       
        <div className = 'main'>
            <div className ='button-wrapper'>

                <button onClick={signInHandler} className="button" id="signin"> SIGN IN</button>
                <button onClick = {registerHandler} className="button" id="signin"> REGISTER</button>
            </div>
        </div>
          

    );


}

export default Main;