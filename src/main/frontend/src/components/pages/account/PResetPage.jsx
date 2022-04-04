
import React, {useRef} from 'react';

import './LoginPage.scss';


function PasswordReset(){

    const emailRef = useRef();

    async function submitHandler(e){
        e.preventDefault();

        try{
           console.log("sent email")
            

        }catch(err){
            console.log(err);

        }
    }

    return(
        <div className ="card-container">
            <h1 className='head'> Reset your password</h1>
            <p className = 'head text'>Enter the email you registered with and we will send an email with a link to reset your password.</p>

            <form className = "form" onSubmit = {submitHandler}>
            <div className='control'>
                    <label className='label' htmlFor="email">Enter your accounts email address:</label>
                    <input type='text' id='email'  ref={emailRef} />
                   
                <div className = 'control'>
                    <input value= 'Send Email' type="submit" id='submitButton'/>
                </div>

            </div>
            </form>
        </div>
    )
    
}
export default PasswordReset;