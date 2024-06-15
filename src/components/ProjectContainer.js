import React, { useContext } from 'react';

import '../App.css';
import { GlobalContext } from '../context/GlobalContext';
import { ImGithub } from "react-icons/im";
import { IoArrowRedoSharp } from "react-icons/io5";


const ProjectContainer = ({ project }) => {

    const { theme } = useContext(GlobalContext);
  return (
    <div className={` box2 p-4 rounded-3xl z-0  `}>
        
        <div className={` max-w-[400px] rounded-2xl overflow-hidden transform transition-transform`} 
        >

        <div className='h-[300px]'>
            <img src={`${project.image.length >1 ?theme==='light'?project.image[1]:project.image[0]:project.image[0]}`} alt={project.title} className="w-full h-48 object-cover rounded-2xl hover:scale-105 " />

            <div className={`p-4 h-[400px] text-white  transition-transform translate-y-0 hover:-translate-y-[210px] ${theme==='light'?'bg-lightBg':'bg-darkBg'} }`}>
                
                <h3 className={`text-lg font-semibold  text-${theme==='light'?'lightTheme':'darkTheme'}`}>{project.title}</h3>
                <div className={`flex justify-start underline gap-6 text-3xl my-2 text-${theme==='light'?'lightTheme':'darkTheme'}`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"><ImGithub/></a>
                    <a href={project.live}  target="_blank" rel="noopener noreferrer"><IoArrowRedoSharp/></a>
                </div>
                <p className="text-xs my-1 text-gray-400">Tech: <span className='font-semibold'>{project.tech}</span></p>
                <p className={`text-sm my-2 mb-4 font-semibold ${theme==='light'?'text-greyText':'text-lightBg'}`}>
                    <span className="text-xs text-gray-400" >
                        Description: <br/>
                    </span>
                    {project.description.map((desc, index) => (
                       <span className='flex flex-row gap-2'>
                           • <ul>{desc}</ul>
                        </span>
                    ))}
                    
                </p>

            </div>

     </div>


    </div>
        

    </div>
  )
}

export default ProjectContainer