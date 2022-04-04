
import React, { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './components/pages/landing/LandingPage';
import LoginPage from './components/pages/account/LoginPage';
import SignupPage from './components/pages/account/SignupPage';
import PResetPage from './components/pages/account/PResetPage';

import ProfilePage from './components/pages/loggedin/ProfilePage';
import GoalPage from './components/pages/loggedin/GoalPage';
import ManagePage from './components/pages/loggedin/ManagePage';
import PostPage from './components/pages/loggedin/PostPage';

import { UserContext } from './components/UserContext';
import { TaskContext } from './components/TaskContext';

import './App.css';

function App() {

  const [user, setUser] = useState(null);
  const [task, setTask] = useState(null);

  const providerValue = useMemo( ()=> ({user, setUser}), [user, setUser]);
  const pValue = useMemo( ()=> ({task, setTask}), [task, setTask]);
  
  return (
    <div>
      
      <UserContext.Provider value = { providerValue}>
        <TaskContext.Provider value = {pValue}>

        
          <Routes>
          
            <Route path='/' element={<LandingPage/>}/>
              
          
            <Route path='/signin' element={<LoginPage/>}/>
              
            
            <Route path='/register' element={<SignupPage/>}/>
            
            <Route path='/password-reset' element={<PResetPage/>}/>

            <Route path='/profile' element={<ProfilePage/>}/>

            <Route path='/goals' element={<GoalPage/>}/>

            <Route path='/manage' element={<ManagePage/>}/>

            <Route path='/posts' element={<PostPage/>}/>
          
          </Routes>
        </TaskContext.Provider>
      </UserContext.Provider>
 

    </div>
  );
}

export default App;
