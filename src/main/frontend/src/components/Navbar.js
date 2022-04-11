import React, {useState , useEffect, useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import axios from "axios";

import './Navbar.scss';
import logo from './images/logo.svg';


const Navbar = () => {

    const currentName = localStorage.getItem('username');

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    let navigate = useNavigate();
    
    useEffect( ()=> {
        userInfo();
    }, []);
    
    
    async function userInfo(){

    }

    const logoutHandler = () =>{
        localStorage.clear();
        closeMenu();
        navigate('/');
    }

    const manageHandler = () =>{
        closeMenu();
        navigate('/manage');
    }

    const postHandler = () =>{
        closeMenu();
        navigate('/posts');
    }

    const goalHandler = () =>{
        closeMenu();
        navigate('/goals');
    }

    if(!currentName){
        return (
     
            <div className="header">
                <nav className="navbar">
    
                    <a href='/'>
                        <img src={logo} className = 'logo'/>
                    </a>
                    <div className='bars' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{color: '#EEDF93'}}/>)
                        : (<FaBars size={30} style={{color: '#EEDF93'}}/>)}
                    </div>
    
    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className ='nav-item'>
                            <a href='#about' onClick={closeMenu}>About</a>
                        </li>
                        <li className ='nav-item'>
                            <a href = '#testimonials' onClick={closeMenu}> Testimonials</a>
                        </li>
                        <li className = 'nav-item'>
                            <a href = '#contact-us' onClick={closeMenu}>Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
    
    
        );
    }else{
        return(
            <div className="header">
                <nav className="navbar">
    
                   
                    <img src={logo} className = 'logo'/>
                    
                    <div className='bars' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{color: '#EEDF93'}}/>)
                        : (<FaBars size={30} style={{color: '#EEDF93'}}/>)}
                    </div>
    
    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className ='nav-item'>
                            <button onClick= {goalHandler}>My Goals</button>
                        </li>
                        <li className ='nav-item'>
                            <button onClick={manageHandler}>Manage Account</button>
                        </li>
                        <li className ='nav-item'>
                            <button onClick={postHandler}>Discussion Page</button>
                        </li>
                        <li className = 'nav-item'>
                            <button  onClick={logoutHandler} className='navbar-buttons'>Logout</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

    
}
export default Navbar;
