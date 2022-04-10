import React, {useContext, useRef, useState} from 'react';
import { UserContext }  from '../../UserContext';

import Navbar from '../../Navbar';

import './ManagePage.scss';
import { FaBlackberry } from 'react-icons/fa';

import defaultHat from '../../images/monkey.png';
import defaultShirt from '../../images/cloth.png';
import defaultPants from '../../images/pants.png';

import pirateHat from '../../images/pirate-hat.png';
import pirateShirt from '../../images/pirate-shirt.png';
import piratePants from '../../images/wooden-leg.png';

import ninjaHat from "../../images/ninja-head.png";
import ninjaShirt from "../../images/ninja-body.png";
import ninjaPants from "../../images/ninja-legs.png";

import knightHat from "../../images/knight.png";
import knightShirt from "../../images/armor.png";
import knightPants from "../../images/armour.png";


const ManagePage = () => {

    const {user,  setUser} = useContext(UserContext);

    const [hat, setHat] = useState(-1);
    const [shirt, setShirt] = useState(-1);
    const [pants, setPants] = useState(-1);


    function changeHat(id){
        //change img src for Hat
        setHat(pirateHat);
        console.log(hat)
    }
    function changeShirt(id){

        //change img src for shirt
        setShirt(id);

    }

    function changePants(id){

        //change img src for pants
        setPants(id);

    }

    return(
        
       

       
        <div>
            <Navbar/>
            
            <div className='store-container'>

                <ul className='selected-items'>
                    <h1>Current Outfit</h1>
                    <li>
                        <div className="selected-item">
                            <img src={hat} alt='Selected Hat'/>
                        </div>
                    </li>
                    <li>
                        <div className="selected-item">
                                <img src='' alt='Selected Shirt'/>
                        </div>
                    </li>
                    <li>
                        <div className="selected-item">
                            <img src='' alt='Selected Pants'/>
                        </div>
                    </li>
                

                </ul>

                <ul className='store-items'>

                    <li className='store-item'>
                        <h1>Pirate Garments:</h1>
                        <div className = 'hat-items'>

                            <div className={hat === 'Pirate' ? 'hat-item selected' : 'hat-item'} onClick={() => changeHat('../../images/pirate-hat.png')}>
                                <img src={pirateHat} alt='Pirate Hat'/>
                            </div>
                            <div className={shirt === 'Pirate' ? 'shirt-item selected' : 'hat-item'} onClick={() => changeShirt('Pirate')}>
                                <img src={pirateShirt} alt='Pirate Shirt' />
                            </div>
                            <div className={pants === 'Pirate' ? 'pants-item selected' : 'hat-item'} onClick={() => changePants('Pirate')}>
                                <img src={piratePants} alt='Pirate Pants'/>
                            </div>
                    
                        </div>
                    </li>
                    <li className='store-item'>
                        <h1>Ninja Garments:</h1>
                        <div className = 'shirt-items'>
                            <div className={hat === 'Ninja' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changeHat('Ninja')}>
                                <img src={ninjaHat} alt='Ninja Hat'/>
                            </div>
                            <div className={shirt === 'Ninja' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changeShirt('Ninja')}>
                                <img src={ninjaShirt} alt='Ninja Shirt'/>
                            </div>
                            <div className={pants === 'Ninja' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changePants('Ninja')}>
                                <img src={ninjaPants} alt='Ninja Pants'/>
                            </div>
                            
                        </div>
                    </li>
                    <li className='store-item'>
                        <h1>Knight Garments:</h1>
                        <div className = 'pants-items'>
                            <div className={hat === 'Knight' ? 'pants-item selected' : 'pants-item'} onClick={() => changeHat('Knight')}>
                                <img src={knightHat} alt='Knight head'/>
                            </div>
                            <div className={pants === 'Knight' ? 'pants-item selected' : 'pants-item'} onClick={() => changeShirt('Knight')}>
                                <img src={knightShirt} alt='Knight shirt'/>
                            </div>
                            <div className={pants === 'Knight' ? 'pants-item selected' : 'pants-item'} onClick={() => changePants('Knight')}>
                                <img src={knightPants} alt='Knight pants'/>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            </div>
           
        </div>
          

    );


}

export default ManagePage;