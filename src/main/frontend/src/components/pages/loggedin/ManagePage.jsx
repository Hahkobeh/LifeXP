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
        
        setHat(id);
    }
    function changeShirt(id){
        setShirt(id);

    }

    function changePants(id){
        setPants(id);

    }
    const topicRef = useRef();

    function handleChange(){
        console.log("it should have changed to " + topicRef.current.value)
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

                            <div className={hat === '0.0' ? 'hat-item selected' : 'hat-item'} onClick={() => changeHat('0.0')}>
                                <img src='' alt='Red Hat'/>
                            </div>
                            <div className={hat === '0.1' ? 'shirt-item selected' : 'hat-item'} onClick={() => changeHat('0.1')}>
                                <img src='' alt='Green Hat' />
                            </div>
                            <div className={hat === '0.2' ? 'pants-item selected' : 'hat-item'} onClick={() => changeHat('0.2')}>
                                <img src='' alt='Blue Hat'/>
                            </div>
                    
                        </div>
                    </li>
                    <li className='store-item'>
                        <h1>Burglar Garments:</h1>
                        <div className = 'shirt-items'>
                            <div className={shirt === '1.0' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changeShirt('1.0')}>
                                <img src='' alt='Red shirt'/>
                            </div>
                            <div className={shirt === '1.1' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changeShirt('1.1')}>
                                <img src='' alt='Green shirt'/>
                            </div>
                            <div className={shirt === '1.2' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changeShirt('1.2')}>
                                <img src='' alt='Blue shirt'/>
                            </div>
                            
                        </div>
                    </li>
                    <li className='store-item'>
                        <h1>Knight Garments:</h1>
                        <div className = 'pants-items'>
                            <div className={pants === '2.0' ? 'pants-item selected' : 'pants-item'} onClick={() => changePants('2.0')}>
                                <img src='' alt='Red pants'/>
                            </div>
                            <div className={pants === '2.1' ? 'pants-item selected' : 'pants-item'} onClick={() => changePants('2.1')}>
                                <img src='' alt='Green pants'/>
                            </div>
                            <div className={pants === '2.2' ? 'pants-item selected' : 'pants-item'} onClick={() => changePants('2.2')}>
                                <img src='' alt='Blue pants'/>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            </div>
           
        </div>
          

    );


}

export default ManagePage;