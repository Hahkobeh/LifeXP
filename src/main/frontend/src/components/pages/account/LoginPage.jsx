import React, {useRef , useState , useContext} from 'react';
import { Link, useNavigate} from 'react-router-dom';

import logo from '../../images/logo.svg';
import { login } from '../../TrialUser';
import { UserContext }  from '../../UserContext';
import { TaskContext }  from '../../TaskContext';
import axios from "axios";
import './LoginPage.scss';

function LoginPage(){

    const {user,  setUser} = useContext(UserContext);
    const {task,  setTask} = useContext(TaskContext);

    let navigate = useNavigate();

    const registerHandler = () =>{
        navigate('/register');
    }

    const emailRef = useRef();
    const passwordRef = useRef();


    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);


    function emailErrorHandler(){
        
        setEmailError(true);
    }

    function passwordErrorHandler(){
        
        setPasswordError(true);
    }

    async function submitHandler(e){
        e.preventDefault();
        setEmailError(false);
        setPasswordError(false);
        setError(false);

        if(emailRef.current.value ===""){
            emailErrorHandler();
            
            return;
        }

        if(passwordRef.current.value === ""){
            passwordErrorHandler();
            
            return;
        }

        try{

            let usernameValue;
            let idValue;
            let type;
            let lvl;
            let request = 'http://localhost:8080/api/user/login'

            let userData = {
                username: emailRef.current.value,
                password: passwordRef.current.value
            }
            await axios.post(request, userData)
                .then(res => {
                        console.log(res.data.toString() + 'happened!')
                        usernameValue = res.data.username;
                        idValue = res.data.id;
                        type = res.data.type;
                    }

                )
            console.log(usernameValue)
            if(usernameValue === undefined){
                setError(true)
                return
            }

            localStorage.setItem('username', usernameValue);
            localStorage.setItem('id', idValue);
            localStorage.setItem('type', type)
            navigate('/goals');
            
        }catch(err){
            console.log(err);
            setError(true);
        }
    }

    
    return(
        <div className="card-container">
            
            <a href='/'>
                <img src={logo} className = 'logo'/>
            </a>
            <h1 className="head">Log in to LifeXP</h1>
            
          
            <form className="form" onSubmit={submitHandler}>
              <hr/>
                <div className ="control">
                 
                    <input placeholder="Username" type ='text' id='email' ref={emailRef}/>
                    {emailError && <p className='error'> You need to enter a username.</p>}
                  
                </div>
                <div className ="control">
                  
                    <input placeholder= 'Password' type ='password' id='password' ref= {passwordRef} />
                    {passwordError && <p className='error'>You must enter a password.</p>}
                    
                </div>
                {error && <p className='error'>Username and password do not match</p>}
                <div className ="control">
                    <input value= 'Log In' type='submit' id="submitButton"/>
                </div>
                
          </form>
          
          <hr/>
          <h2 className="head">Don't have an Account?</h2>
          <div className="no-account">
              <button onClick={registerHandler} className="button">Sign up for LifeXP</button>
         </div>


        
        </div>
    )
}

export default LoginPage;