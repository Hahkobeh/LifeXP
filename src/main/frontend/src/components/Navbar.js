import React, {useState , useEffect, useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import axios from "axios";

import './Navbar.scss';
import logo from './images/logo.png';

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



function Navbar(props) {

    
    
    useEffect( ()=>{
        
            userInfo();
       
    }, [props])
    const currentName = localStorage.getItem('username');
    const id = localStorage.getItem('id');

    const [hat, setHat] = useState();
    const [body , setBody] = useState();
    const [legs, setLegs] = useState();

    const [click, setClick] = useState(false);
    const [user, setUser] = useState([]);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    let navigate = useNavigate();

    let equip = [];
    useEffect( ()=>{
        userInfo();
    }, [])
    
    async function userInfo(){
        await axios.get(`http://localhost:8080/api/user/get-user/${id}`)
            .then( res => {
                //console.log(res.data)
                    setUser(res.data);
            })

        
        await axios.get(`http://localhost:8080/api/item/get-equipped/${currentName}`)
            .then( res => {
                //console.log(res.data)

                equip = res.data;

            })
            equip.forEach( (f) => {
                
                if(f.type === 'hat'){
                    if(f.shopName === "Default"){
                        setHat(hatDefault);
                    }else if(f.shopName === "Pirate"){
                        setHat(hatPirate);
                    }else if(f.shopName === "Ninja"){
                        setHat(hatNinja);
                    }else{
                        setHat(hatKnight);
                    }

                }else if(f.type === 'shirt'){
                    if(f.shopName === "Default"){
                        setBody(shirtDefault);
                    }else if(f.shopName === "Pirate"){
                        setBody(shirtPirate);
                    }else if(f.shopName === "Ninja"){
                        setBody(shirtNinja);
                    }else{
                        setBody(shirtKnight);
                    }
                }else{
                    if(f.shopName === "Default"){
                        setLegs(pantsDefault);
                    }else if(f.shopName === "Pirate"){
                        setLegs(pantsPirate);
                    }else if(f.shopName === "Ninja"){
                        setLegs(pantsNinja);
                    }else{
                        setLegs(pantsKnight);
                    }
                }
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

                <nav className="navbar">
    
                    <a href='/'>
                        <img src={logo} className = 'logo' alt='logo'/>
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
    
    
        );
    }else{
        return(
                <nav className="navbar">

                    <img src={logo} className = 'logo' alt='logo'/>

                    <div className = "prof">
                        <ul className='avatar'>
                            <li>
                                <div className="avatar-piece">
                                    <img src={hat} alt='H'/>
                                </div>
                            </li>
                            <li>
                                <div className="avatar-piece">
                                        <img src={body} alt='S'/>
                                </div>
                            </li>
                            <li>
                                <div className="avatar-piece">
                                    <img src={legs} alt='P'/>
                                </div>
                            </li>
                    

                        </ul>
                        <ul className= 'profile-things'>
                            <li>
                                <h1>{currentName}</h1> 
                            </li>
                            <li>
                                <h2>XP: {user.experience}</h2>
                            </li>
                            <li>
                                <h2>Gold: {user.gold}</h2>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='bars' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{color: '#EEDF93'}}/>)
                        : (<FaBars size={30} style={{color: '#EEDF93'}}/>)}
                    </div>
    
    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className ='nav-item'>
                            <button onClick= {goalHandler}>Goals</button>
                        </li>
                        <li className ='nav-item'>
                            <button onClick={manageHandler}>Shop</button>
                        </li>
                        <li className ='nav-item'>
                            <button onClick={postHandler}>Discussion</button>
                        </li>
                        <li className = 'nav-item'>
                            <button  onClick={logoutHandler} className='navbar-buttons'>Logout</button>
                        </li>
                    </ul>
                </nav>
        );
    }

    
}
export default Navbar;
