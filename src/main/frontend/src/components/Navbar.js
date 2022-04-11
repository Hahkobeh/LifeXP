import React, {useState , useEffect, useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import axios from "axios";

import './Navbar.scss';
import logo from './images/logo.svg';

import hatDefault from './images/monkey.png';
import shirtDefault from './images/cloth.png';
import pantsDefault from './images/pants.png';

import hatPirate from './images/pirate-hat.png';
import shirtPirate from './images/pirate-shirt.png';
import pantsPirate from './images/wooden-leg.png';

import hatNinja from "./images/ninja-head.png";
import shirtNinja from "./images/ninja-body.png";
import pantsNinja from "./images/ninja-legs.png";

import hatKnight from "./images/knight.png";
import shirtKnight from "./images/armor.png";
import pantsKnight from "./images/armour.png";


const Navbar = () => {

    
    const currentName = localStorage.getItem('username');
    const id = localStorage.getItem('id');

    const [click, setClick] = useState(false);
    const [user, setUser] = useState([]);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    let navigate = useNavigate();
    
    useEffect( ()=> {
        userInfo();
    }, []);
    
    
    async function userInfo(){
        await axios.get(`http://localhost:8080/api/user/get-user/${id}`)
            .then( res => {
                console.log(res.data)
                setUser(res.data);
            })
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

                    <div>
                        
                        <ul className= 'profile-things'>
                            <li>
                                <h1>{currentName}</h1> 
                            </li>
                            <li>
                                <h1>XP: {user.experience}</h1> 
                            </li>
                            <li>
                                <h1>Gold: {user.gold}</h1> 
                            </li>
                        </ul>
                    </div>
                    
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
