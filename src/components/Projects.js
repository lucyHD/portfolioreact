import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa'

import './Projects.css'

class Projects extends Component{
    
    state = {
        projects: [
            {
                id: 0,
                name: "cyberpet",
                techStack: "JS - HTML - CSS"
            },
            {
                id: 1,
                name: "dicegame",
                techStack: "JS - HTML - CSS"
            },
            {
                id: 2,
                name: "chatbot",
                techStack: "React JS"

            },
            {
                id: 3,
                name: "To-Do List",
                techStack: "MongoDB"
            },
            {
                id: 4,
                name: "Twitter Clone",
                techStack: "React JS"
            },
            {
                id: 5, 
                name: "next",
                techStack: "Python"
            }
        ]
    }


    render(){
        const eachProject = this.state.projects.map((project) => {
            return(
            <div key={project.id}>
                <div className="project"> 
                <a href="https://github.com/lucyHD" target="blank"><FaGithub /> </a>  
                <div className="project-name">{project.name}</div>
                <div className="project-tech">{project.techStack}</div>
                </div> 
            </div>
                )
            })

        return(
            <div>
                <div className="outer-div">
                 <div className="project-box">    
                
                    {eachProject}
                 </div>
                </div> 
            </div>

        )
    }
}

export default Projects; 


