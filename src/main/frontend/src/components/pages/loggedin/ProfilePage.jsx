import React, {useContext} from 'react';
import { UserContext }  from '../../UserContext';

import Navbar from '../../Navbar';

const ProfilePage = () => {

    const {user,  setUser} = useContext(UserContext);

    return(
        
       

       
        <div>
             <Navbar/>
            <h2>You Have logged in</h2>
            <div>{JSON.stringify(user , null, 2)}</div>
           
        </div>
          

    );


}

export default ProfilePage;