import React from 'react'; 
import './Sidenav.css'
import { 
    FaGithub,
    FaRegEnvelopeOpen,
    FaLinkedinIn,
    FaInstagram
 } from 'react-icons/fa'



const Sidenav = ()=>{
    return(
        <div>
            <nav className="sidenav">
           
                <a href="https://github.com/lucyHD" target="blank"><FaGithub /> </a>
                <a href="mailto:lucyhelendonnelly@gmail.com" target="blank"><FaRegEnvelopeOpen /> </a> 
                <a href="https://www.linkedin.com/in/lucy-d-99a033152/" target="blank"><FaLinkedinIn /> </a>
                <a href="#"><FaInstagram /> </a>
               
            </nav>
          
        </div>

    )

}

export default Sidenav; 