import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import pdfFile from '../assets/AyushResume.pdf';

import { RiDownloadLine } from "react-icons/ri";
import SkillIconContainer from './SkillIconContainer';
import gitLogo from '../assets/githubLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import cppLogo from '../assets/icons8-c-96.png'
import cLogo from '../assets/icons8-c-96 (1).png'
import nodeLogo from '../assets/icons8-nodejs-96.png'
import expressLogo from '../assets/icons8-express-js-50.png'
import cssLogo from '../assets/icons8-css-96.png'
import jsLogo from '../assets/icons8-js-96.png'
import mongoLogo from '../assets/icons8-mongo-db-96.png'
import reactLogo from '../assets/icons8-react-js-96.png'
import sqlLogo from '../assets/icons8-sql-64.png'
import pythonLogo from '../assets/icons8-python-96.png'
import osLogo from '../assets/icons8-operating-system-50.png'


const Skills = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`flex h-[100%] w-vw flex-col items-center justify-center gap-6`}>
     
      <h1 className={`flex flex-row items-center justify-center text-[40px] gap-2 lg:mt-10  font-black my-5`}> About 
       <span className={`${theme==='light'? 'text-lightTheme' : 'text-darkTheme' }`}> Me</span>
      </h1>

      <div className={` w-[80%] lg:w-[60%] my-4 rounded-2xl box ${theme==='light'?'box':'bg-gray-700'}`}>

      <p className='p-4 text-lg font-medium'>I'm a 4th year Computer Science Engineering student at NSUT, Delhi, with a passion for coding and web development. <br/>Proficient in C/C++ and familiar with Python, I have a solid foundation in Data Structures and Algorithms, Operating Systems, OOP, and DBMS (SQL).<br/> I specialize in full-stack development using ReactJS, HTML5, CSS, JavaScript, Tailwind CSS, ExpressJS, NodeJS, and MongoDB. Explore my projects to see my work in action!</p>
      </div>

      <div className={`${theme==='light'?'box2 p-2 rounded-full ':''}`}>
        <a href={pdfFile} target="_blank" rel="noopener noreferrer" >

                  <div  className={`font-bold group  w-[150px] rounded-full border-2   flex flex-row justify-end ${theme==='light'?'border-lightTheme hover:bg-lightTheme  text-greyText':'border-darkTheme hover:bg-darkTheme text-darkBg'} `}>
                    
                      <button className='flex  flex-row items-center justify-between w-full group-hover:text-white '>
                          <div className={`  group-hover:text-white  rounded-full p-3 flex flex-row items-center justify-between ${theme==='light'?'bg-lightTheme text-lightBg':'bg-darkTheme text-darkBg'}`}>

                              <RiDownloadLine className={`text-[20px]  group-hover:text-white  ` }/>
                          </div>
                      <div className={`py-2  pr-6 text-lg  group-hover:text-white  ${theme==='light'?'text-lightTheme ':'text-darkTheme'}`}>
                              Resume
                          </div> 
                      </button>
                      
                  </div>

        </a>
      </div>
      
      <div className={`flex w-[400px] flex-col lg:flex-row gap-6 items-center my-4 justify-center text-[40px] p-6 lg:px-12 rounded-2xl`}>
         
         
         <div className={`box2 w-[300px] lg:w-auto box2 aboutBox px-6 py-2 border-2 ${theme==='light'?'border-lightBg':'border-darkBg'} ${theme==='light'?'hover:border-lightTheme':'hover:border-darkTheme'}`}>

           <div className={`font-black ${theme==='light'?'text-lightTheme':'text-darkTheme'}`}>10+</div>
           <div>Projects</div>
         </div>


         <div className={`box2 w-[300px] lg:w-auto box2 aboutBox px-6 py-2 border-2 ${theme==='light'?'border-lightBg':'border-darkBg'} ${theme==='light'?'hover:border-lightTheme':'hover:border-darkTheme'}`}>
         <div className={`font-black ${theme==='light'?'text-lightTheme':'text-darkTheme'}`}>0-1 yrs</div>
           <div className=''>Experience</div>
         </div>
     </div>
     
     <div className='flex  flex-col gap-2'>
         <h1 className={`flex flex-row items-center justify-center text-[40px] gap-2 mt-10 font-black my-5`}> My 
         <span className={`${theme==='light'? 'text-lightTheme' : 'text-darkTheme' }`}> Skills</span>
         </h1>


         <div className={`grid grid-cols-3 lg:grid-cols-6  gap-8 lg:gap-12 my-6  `}>
               <SkillIconContainer imageSrc={gitLogo} name="GitHub"/>
               <SkillIconContainer imageSrc={osLogo} name="Operating System" />
               <SkillIconContainer imageSrc={cppLogo} name="C++" />
               <SkillIconContainer imageSrc={nodeLogo} name="NodeJs" />
               <SkillIconContainer imageSrc={expressLogo} name="ExpressJs" />
               <SkillIconContainer imageSrc={reactLogo} name="ReactJs" />
               <SkillIconContainer imageSrc={cssLogo} name="CSS" />
               <SkillIconContainer imageSrc={jsLogo} name="JavaScript" />
               <SkillIconContainer imageSrc={mongoLogo} name="MongoDB" />

               <div className={`w-[80px]  group h-[80px] text-greyText font-extrabold text-[20px] p-2 bg-lightBg box2 rounded-3xl flex flex-col items-center justify-center`} >OOPS
               {/* <span className='  text-xs  right-[90px] -top-6 px-2 py-1 rounded-t-3xl rounded-l-3xl text-lightBg bg-greyText group-hover:block '>Object Oriented Programming</span> */}
               </div>
               <SkillIconContainer imageSrc={pythonLogo} name="Python" />
               <SkillIconContainer imageSrc={htmlLogo} name="HTML"/>
               <div className={`w-[80px]  group  h-[80px] text-greyText font-extrabold text-[20px] p-2 bg-lightBg box2 rounded-3xl flex flex-col items-center justify-center`} >DSA
               {/* <span className='  text-xs right-[90px] -top-4 px-2 py-1 rounded-t-3xl rounded-l-3xl text-lightBg bg-greyText group-hover:block '>Data Structures And Algorithms</span> */}
               </div>
               <div className={`w-[80px]  group h-[80px] text-greyText font-extrabold text-[20px] p-2 bg-lightBg box2 rounded-3xl flex flex-col items-center justify-center`} >DBMS
               {/* <span className='  right-[90px] text-xs -top-6 px-2 py-1 rounded-t-3xl rounded-l-3xl text-lightBg bg-greyText group-hover:block '>Data Base Management System</span> */}
               </div>
               <SkillIconContainer imageSrc={cLogo} name="C" />
               <SkillIconContainer imageSrc={sqlLogo} name="SQL" />
               


         </div>
         
     </div>

     <div className='flex flex-col gap-2'>
         <h1 className={`flex flex-row items-center justify-center text-[40px] gap-2 mt-10 font-black my-5`}> My 
         <span className={`${theme==='light'? 'text-lightTheme' : 'text-darkTheme' }`}> Education</span>
         </h1>
     </div>
     
      
    </div>
  )
}

export default Skills