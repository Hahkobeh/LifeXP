import React, {useContext, useState} from 'react';
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


    return(
        
       

       
        <div>
            <Navbar/>
            
            <div className='store-container'>

                <ul className='store-items'>

                    <li className='store-item'>
                        <h1>Hats:</h1>
                        <div className = 'hat-items'>

                            <div className={hat === '0.0' ? 'hat-item selected' : 'hat-item'} onClick={() => changeHat('0.0')}>
                                <img src='' alt='Red Hat'/>
                            </div>
                            <div className={hat === '0.1' ? 'hat-item selected' : 'hat-item'} onClick={() => changeHat('0.1')}>
                                <img src='' alt='Green Hat' />
                            </div>
                            <div className={hat === '0.2' ? 'hat-item selected' : 'hat-item'} onClick={() => changeHat('0.2')}>
                                <img src='' alt='Blue Hat'/>
                            </div>
                            <div className={hat === '0.3' ? 'hat-item selected' : 'hat-item'} onClick={() => changeHat('0.3')}>
                                <img src='' alt='Yellow Hat'/>
                            </div>
                    
                        </div>
                    </li>
                    <li className='store-item'>
                        <h1>Shirts:</h1>
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
                            <div className={shirt === '1.3' ? 'shirt-item selected' : 'shirt-item'} onClick={() => changeShirt('1.3')}>
                                <img src='' alt='Yellow shirt'/>
                            </div>
                        </div>
                    </li>
                    <li className='store-item'>
                        <h1>Pants:</h1>
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
                            <div className={pants === '2.3' ? 'pants-item selected' : 'pants-item'} onClick={() => changePants('2.3')}>
                                <img src='' alt='Yellow pants'/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
           
        </div>
          

    );


}

export default ManagePage;