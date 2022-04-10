import React, {useContext, useRef, useState} from 'react';
import { UserContext }  from '../../UserContext';

import Navbar from '../../Navbar';

import './ManagePage.scss';
import { FaBlackberry } from 'react-icons/fa';



const ManagePage = () => {

    const {user,  setUser} = useContext(UserContext);

    const [hat, setHat] = useState(-1);
    const [shirt, setShirt] = useState(-1);
    const [pants, setPants] = useState(-1);


    function changeHat(id){
        //change img src for Hat
        setHat(id);
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
                            <img src='' alt='Selected Hat'/>
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

                            <div className={hat === 'Pirate' ? 'hat-item selected' : 'hat-item'} onClick={() => changeHat('Pirate')}>
                                <img src={require("../../images/pirate-hat.png")} alt='Pirate Hat'/>
                            </div>
                            <div className={shirt === 'Pirate' ? 'shirt-item selected' : 'hat-item'} onClick={() => changeShirt('Pirate')}>
                                <img src={require("../../images/pirate-shirt.png")} alt='Pirate Shirt' />
                            </div>
                            <div className={pants === 'Pirate' ? 'pants-item selected' : 'hat-item'} onClick={() => changePants('Pirate')}>
                                <img src={require("../../images/wooden-leg.png")} alt='Pirate Pants'/>
                            </div>
                    
                        </div>
                    </li>
                    <li className='store-item'>
                        <h1>Ninja Garments:</h1>
                        <div className = 'shirt-items'>
                            <div className={hat === 'Ninja' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changeHat('Ninja')}>
                                <img src={require("../../images/ninja-head.png")} alt='Ninja Hat'/>
                            </div>
                            <div className={shirt === 'Ninja' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changeShirt('Ninja')}>
                                <img src={require("../../images/ninja-body.png")} alt='Ninja Shirt'/>
                            </div>
                            <div className={pants === 'Ninja' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changePants('Ninja')}>
                                <img src={require("../../images/ninja-legs.png")} alt='Ninja Pants'/>
                            </div>
                            
                        </div>
                    </li>
                    <li className='store-item'>
                        <h1>Knight Garments:</h1>
                        <div className = 'pants-items'>
                            <div className={hat === 'Knight' ? 'pants-item selected' : 'pants-item'} onClick={() => changeHat('Knight')}>
                                <img src={require("../../images/knight.png")} alt='Knight head'/>
                            </div>
                            <div className={pants === 'Knight' ? 'pants-item selected' : 'pants-item'} onClick={() => changeShirt('Knight')}>
                                <img src={require("../../images/armor.png")} alt='Knight shirt'/>
                            </div>
                            <div className={pants === 'Knight' ? 'pants-item selected' : 'pants-item'} onClick={() => changePants('Knight')}>
                                <img src={require("../../images/armour.png")} alt='Knight pants'/>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            </div>
           
        </div>
          

    );


}

export default ManagePage;