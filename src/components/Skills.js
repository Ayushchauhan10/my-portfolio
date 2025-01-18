import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../App.css'
import pdfFile from '../assets/AyushResume.pdf';

import { RiDownloadLine } from "react-icons/ri";

import Education from './Education';
import MySkills from './MySkills';



const Skills = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`flex h-[100%] w-vw flex-col items-center justify-center gap-6 ${theme === 'light' ? 'light-bg1' : 'dark-bg1'} `}>
       <h1 className={`flex   mt-[50px]  flex-row items-center justify-center text-[40px] gap-2 lg:mt-10  font-black my-5`}> About
    <span className={`${theme === 'light' ? 'text-lightTheme' : 'text-darkTheme'}`}> Me</span>
        </h1>

        <div className={` w-[80%] lg:w-[60%] my-4 rounded-2xl box ${theme === 'light' ? 'box' : 'bg-gray-700'}`}>

            <p className='p-4 text-lg font-medium'>I'm a 4th year Computer Science Engineering student at NSUT, Delhi, with a passion for coding and web development. <br />Proficient in C/C++ and familiar with Python, I have a solid foundation in Data Structures and Algorithms, Operating Systems, OOP, and DBMS (SQL).<br /> I specialize in full-stack development using ReactJS, HTML5, CSS, JavaScript, Tailwind CSS, ExpressJS, NodeJS, and MongoDB. Explore my projects to see my work in action!</p>
        </div>

        {/* <div className={`${theme === 'light' ? 'box2 p-2 rounded-full ' : ''}`}>
            <a href={pdfFile} target="_blank" rel="noopener noreferrer" >

            <div className={`font-bold group  w-[150px] rounded-full border-2   flex flex-row justify-end ${theme === 'light' ? 'border-lightTheme hover:bg-lightTheme  text-greyText' : 'border-darkTheme hover:bg-darkTheme text-darkBg'} `}>

                <button className='flex  flex-row items-center justify-between w-full group-hover:text-white '>
                <div className={`  group-hover:text-white  rounded-full p-3 flex flex-row items-center justify-between ${theme === 'light' ? 'bg-lightTheme text-lightBg' : 'bg-darkTheme text-darkBg'}`}>

                    <RiDownloadLine className={`text-[20px]  group-hover:text-white  `} />
                </div>
                <div className={`py-2  pr-6 text-lg  group-hover:text-white  ${theme === 'light' ? 'text-lightTheme ' : 'text-darkTheme'}`}>
                    Resume
                </div>
                </button>

            </div>

            </a>
        </div> */}

        <div className={`flex w-[400px] lg:w-auto flex-col lg:flex-row gap-6 items-center my-4 justify-center text-[40px] p-6 lg:px-12 rounded-2xl`}>

            <div className={`box2 w-[300px]  box2 aboutBox px-6 py-2 border-2 ${theme === 'light' ? 'border-lightBg' : 'border-darkBg'} ${theme === 'light' ? 'hover:border-lightTheme' : 'hover:border-darkTheme'}`}>
            <div className={`font-black ${theme === 'light' ? 'text-lightTheme' : 'text-darkTheme'}`}>10+</div>
            <div>Projects</div>
            </div>

            <div className={`box2 w-[300px]  box2 aboutBox px-6 py-2 border-2 ${theme === 'light' ? 'border-lightBg' : 'border-darkBg'} ${theme === 'light' ? 'hover:border-lightTheme' : 'hover:border-darkTheme'}`}>
            <div className={`font-black ${theme === 'light' ? 'text-lightTheme' : 'text-darkTheme'}`}>0-1 yrs</div>
            <div className=''>Experience</div>
            </div>

        </div>



      <MySkills/>

      <div className='flex w-full flex-col gap-2 items-center justify-center'>
        <h1 className={`flex flex-row items-center justify-center text-[40px] gap-2 mt-10 font-black my-5`}> Education
          <span className={`${theme === 'light' ? 'text-lightTheme' : 'text-darkTheme'}`}> TimeLine</span>
        </h1>


      <Education/>
        
      </div>


    </div>
  )
}

export default Skills