import React from 'react';
import '../App.css';
import UserSignupPage from '../pages/UserSignupPage';
import UserLoginPage from '../pages/UserLoginPage';
import ApiProgress from "../shared/ApiProgress"

function App() {
  return (
    <div className="row">
      <div className="col">      
          <UserSignupPage/>       
     </div>
     <div className="col">   
          <UserLoginPage/>    
     </div>
    </div>
  );
}

export default App;
