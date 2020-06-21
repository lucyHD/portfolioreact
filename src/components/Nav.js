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
            <div className="listItems">
                <ul>
              
                 <li><a href="#Home">Home</a></li>
                 <li><a href="#About">About</a></li>
                 <li><a href="#Projects">Projects</a></li>
                 <li><a href="#Contact">Contact</a></li>
                </ul>  
            </div> 
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