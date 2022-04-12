import React from 'react';
import './Main.scss';
import { useNavigate } from 'react-router-dom';
import background from '../../images/background.png'
import background2 from '../../images/background2.png'
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
            <img src={background} alt="background" className="background"/>
            <img src={background2} alt="background" className="background2"/>
            <div className ='button-wrapper'>


                <button onClick={signInHandler} className="button" id="signin"><h1> SIGN IN </h1></button>
                <button onClick = {registerHandler} className="button" id="signin"><h1> REGISTER </h1></button>
            </div>
        </div>
          

    );


}

export default Main;