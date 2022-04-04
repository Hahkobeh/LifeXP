import React, {useRef , useState , useContext} from 'react';
import { Link, useNavigate} from 'react-router-dom';

import logo from '../../images/logo.svg';
import { login } from '../../TrialUser';
import { UserContext }  from '../../UserContext';
import { TaskContext }  from '../../TaskContext';

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

            //query data base and if user is exists log in if password and email matches
            //set user to the user found in database
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
            const user = await login();
            setUser(user);
            setTask(user['tasks']);
            navigate('/profile');
            
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
                 
                    <input placeholder="Email" type ='text' id='email' ref={emailRef}/>
                    {emailError && <p className='error'> You need to enter an email.</p>}
                  
                </div>
                <div className ="control">
                  
                    <input placeholder= 'Password' type ='password' id='password' ref= {passwordRef} />
                    {passwordError && <p className='error'>You must enter a password.</p>}
                    
                </div>
                {error && <p className='error'>Email and password do not match</p>}
                <div className ="control">
                    <input value= 'Log In' type='submit' id="submitButton"/>
                </div>
                <Link to='/password-reset' className="pwPage"  target="_blank" rel="noopener noreferrer">Forgot your password?</Link>
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