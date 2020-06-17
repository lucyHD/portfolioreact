import React from 'react';
import { Component } from 'react';
import './Nav.css'; 
import Headroom from 'react-headroom'
import logo from './images/logo-lucy.png'


class Nav extends Component {
    render(){

    
        return( 
        <div>
        <Headroom>
        <nav className="mainNav">
        <img src={logo} alt="logopic" id="mainPic"/> 
                <ul>
              
                 <li><a href="#">Home</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Projects</a></li>
                 <li><a href="#">Contact</a></li>
                </ul>   
            </nav>
            </Headroom> 
        </div> 

        )

    }

}

export default Nav; 


 // render() {
    //     const sections = ['Home', 'About', 'Projects', 'Contact']
    //     // const navLinks = sections.map( section=>{
    //     //     return(
    //     //         <li><a href={`#${section}`}>{section}</a></li>
    //     //     )
    //     })