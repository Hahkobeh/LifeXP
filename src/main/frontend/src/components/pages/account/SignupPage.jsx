import React, {useRef, useState} from 'react';
import { useNavigate} from 'react-router-dom';

import logo from '../../images/logo.svg';

import './LoginPage.scss';
import axios from "axios";

function SignupPage(){

    let navigate = useNavigate();

    const redirectHandler = () =>{
        navigate('/signin');
    }
    
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    
  
  
  

    
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [secondPasswordError, setSecondPasswordError] = useState(false);
    const [userExists, setUserExists] = useState(false);

    function emailErrorHandler(){
        setEmailError(true);
    }

    function passwordErrorHandler(){
        setPasswordError(true);
    }

    function secondPasswordErrorHandler(){
        setSecondPasswordError(true);
    }

    async function submitHandler(e){
        e.preventDefault();
        setEmailError(false);
        setPasswordError(false);
        setSecondPasswordError(false);
       
        if(emailRef.current.value === ""){
            emailErrorHandler();
           
            return;
        }
        if(passwordRef.current.value.length < 8){
            passwordErrorHandler();
            
            return;
        }

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            secondPasswordErrorHandler();
          
            return; 
        }

        let returnValue
        let request = 'http://localhost:8080/api/user/register'

        let userData = {
            username: emailRef.current.value,
            password: passwordRef.current.value
        }

        await axios.post(request, userData)
            .then(res => {
                    console.log(res.data.toString() + 'happened!')
                    returnValue = res.data
                }

            )
        console.log(returnValue)
        if(returnValue === true) {
            navigate('/signin')
        }else{
            setUserExists(true);
            return
        }

      
    }

    
    return(
        <div className="card-container">
            
            <a href='/'>
                <img src={logo} className = 'logo'/>
            </a>
            <h1 className="head">Create LifeXP account!</h1>
            
            <form className = "form" onSubmit = {submitHandler}>
                <div className="control">
                    <label className="label" htmlFor="email">Enter an email address:</label>
                    <input type='text' id='email' placeholder= 'e.g johnysins@gmail.com' oninvalid="" ref={emailRef} />
                    {emailError && <p className="error"> You need to enter an email.</p>}
                   
                </div>
                <div className="control">
                    <label className="label"  htmlFor="pword">Create a password:</label>
                    <input type='password' id="pword" placeholder= 'Enter a password' ref={passwordRef} />
                    {passwordError && <p className="error">Passwords must be 8 characters long.</p>}
                    
                </div>
                <div className="control">
                    <label className="label"  htmlFor="pwordConfirm">Confirm your password:</label>
                    <input type='password' id="pwordConfirm" placeholder= 'Re-enter your password' ref={confirmPasswordRef}/>
                    {secondPasswordError && <p className="error">Passwords don't match.</p>}
                    {userExists && <p className="error">Username is taken try another.</p>}
                    
                </div>
                <div className ="control">
                    <input value= 'Sign Up!'  type="submit" id="submitButton"/>
                </div>


            </form>

            <hr/>
          <h2 className="head">Already have an Account?</h2>
          <div className="no-account">
              <button onClick={redirectHandler} className="button">Log in to LifeXP</button>
             
          </div>
          
        </div>
    )
}

export default SignupPage;