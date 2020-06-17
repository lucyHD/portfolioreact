import React from 'react';
import Nav from './components/Nav'; 
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import './App.css'

const App = () =>{
  return(
    
    <div>
     
        <div className="containerMain">
         <Nav />  
         <Main />  
         <Sidenav />
        </div>
          <div>
         
          </div>
    </div>

  )

}

export default App;



