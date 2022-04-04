
import React, {useState} from 'react';

import './Contact.scss';
import logo from '../../images/logo.svg';

function Contact(){




    return (
        <div className ='contact' id='contact-us'>
            <div className ='contact-container'>

                        <img src={logo} className = 'logo'/>

                      
                    
                        <ul className='nav-menu-c'>

                            <li className ='nav-item-c'>
                                <h2>CONTACT INFO</h2>
                            </li>
                            
                            <li className ='nav-item-c'>
                                <h3>LifeXP</h3>
                            </li>
                            
                            <li className ='nav-item-c'>
                                <h4>2500 University Dr NW</h4>
                            </li>
                            
                            <li className ='nav-item-c'>
                                <h4>Calgary, AB</h4>
                            </li>
                            
                            <li className ='nav-item-c'>
                                <h4>T2N 4V5</h4>
                            </li>
                            
                            <li className ='nav-item-c'>
                                <h4>(401) 666 6969</h4>
                            </li>
                        </ul>
            
            </div>
        </div>
    );
}
export default Contact;