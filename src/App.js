import React from 'react';
import Nav from './components/Nav';
import Sidenav from './components/Sidenav'
import About from './components/About'
import Current from './components/Current'
import './App.css'

const App = () => {
  return (

    <div>

      <div className="containerMain">
        <a id="Home"><Nav /></a> 
        <a id="About"><About /></a> 
        <a id="Projects"><Current /></a>
        <a id="Contact"><About /></a>  
        <Sidenav />
    </div>
    <div>

    </div>
    </div >

  )

}

export default App;



