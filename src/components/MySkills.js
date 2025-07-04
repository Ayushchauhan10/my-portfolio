import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
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
import aws from '../assets/aws.webp'
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";

const MySkills = () => {
    const { theme } = useContext(GlobalContext);
  return (
    <div className={`flex  w-full flex-col items-center justify-center ${theme === 'light' ? 'light-bg1' : 'dark-bg1'}`}>


    <div className={`flex flex-col gap-2 `}>
            <h1 className={`flex flex-row items-center justify-center text-[40px] gap-2 mt-10 font-black my-5`}> My
            <span className={`${theme === 'light' ? 'text-lightTheme' : 'text-darkTheme'}`}> Skills</span>
            </h1>

            <div className={`grid grid-cols-3 lg:grid-cols-6   gap-8 lg:gap-12 my-6  `}>
            <SkillIconContainer imageSrc={aws} name="AWS" />
            <div className={`overflow-hidden group bg-lightBg box2 rounded-3xl gap-4 `} >
                <div className='h-[80px] w-[80px] group'>
                <div className='w-full h-[80px] flex flex-col items-center justify-start py-3 mx-auto my-auto  bg-lightBg text-green-700  font-extrabold  text-center'>
                    <BiLogoSpringBoot className='text-6xl'/>
                </div>
                <div className={`flex px-3 py-4 rounded-3xl flex-col text-xs items-center font-semibold justify-center h-[80px] w-auto transition-transform ${theme==='light'?'text-lightTheme bg-lightBg ':'text-darkTheme bg-darkBg'} translate-y-10  group-hover:-translate-y-20 `}>
                
                    Spring Boot
                </div>
                </div>
            </div>
            <div className={`overflow-hidden group bg-lightBg box2 rounded-3xl gap-4 `} >
                <div className='h-[80px] w-[80px] group'>
                <div className='w-full h-[80px] flex flex-col items-center justify-start py-3 mx-auto my-auto  bg-lightBg text-red-600   font-extrabold  text-center'>
                    <FaJava className='text-6xl'/>
                </div>
                <div className={`flex px-3 py-4 rounded-3xl flex-col text-xs items-center font-semibold justify-center h-[80px] w-auto transition-transform ${theme==='light'?'text-lightTheme bg-lightBg ':'text-darkTheme bg-darkBg'} translate-y-10  group-hover:-translate-y-20 `}>
                
                    Java
                </div>
                </div>
            </div>
            <SkillIconContainer imageSrc={gitLogo} name="GitHub" />
            <SkillIconContainer imageSrc={cppLogo} name="C++" />

            <SkillIconContainer imageSrc={nodeLogo} name="NodeJs" />
            <SkillIconContainer imageSrc={expressLogo} name="ExpressJs" />
            <SkillIconContainer imageSrc={reactLogo} name="ReactJs" />
            <SkillIconContainer imageSrc={osLogo} name="Operating System" />
            <SkillIconContainer imageSrc={cssLogo} name="CSS" />
            <SkillIconContainer imageSrc={jsLogo} name="JavaScript" />
            <SkillIconContainer imageSrc={mongoLogo} name="MongoDB" />

            <div className={`overflow-hidden group bg-lightBg box2 rounded-3xl gap-4 `} >
                <div className='h-[80px] w-[80px] group'>
                <div className='w-full h-[80px] flex flex-col items-center justify-start px-3 py-6 mx-auto my-auto  bg-lightBg text-greyText font-extrabold text-xl text-center'>
                    OOPS
                </div>
                <div className={`flex px-3 py-4 rounded-3xl flex-col text-xs items-center font-semibold justify-center h-[80px] w-auto transition-transform ${theme==='light'?'text-lightTheme bg-lightBg ':'text-darkTheme bg-darkBg'} translate-y-10  group-hover:-translate-y-20 `}>
                
                    Object Oriented Programming
                </div>
                </div>
            </div>
            
            <div className={`overflow-hidden group bg-lightBg box2 rounded-3xl gap-4 `} >
                <div className='h-[80px] w-[80px] group'>
                <div className='w-full h-[80px] flex flex-col items-center justify-start py-3 mx-auto my-auto  bg-lightBg text-darkTheme  font-extrabold  text-center'>
                    <RiTailwindCssFill className='text-6xl'/>
                </div>
                <div className={`flex px-3 py-4 rounded-3xl flex-col text-xs items-center font-semibold justify-center h-[80px] w-auto transition-transform ${theme==='light'?'text-lightTheme bg-lightBg ':'text-darkTheme bg-darkBg'} translate-y-10  group-hover:-translate-y-20 `}>                
                    Tailwind CSS
                </div>
                </div>
            </div>
            
            <div className={`overflow-hidden group bg-lightBg box2 rounded-3xl gap-4 `} >
                <div className='h-[80px] w-[80px] group'>
                <div className='w-full h-[80px] flex flex-col items-center justify-start py-3 mx-auto my-auto  bg-lightBg text-orange-500  font-extrabold  text-center'>
                    <SiPostman className='text-6xl'/>
                </div>
                <div className={`flex px-3 py-4 rounded-3xl flex-col text-xs items-center font-semibold justify-center h-[80px] w-auto transition-transform ${theme==='light'?'text-lightTheme bg-lightBg ':'text-darkTheme bg-darkBg'} translate-y-10  group-hover:-translate-y-20 `}>                
                    Postman
                </div>
                </div>
            </div>
            

            <SkillIconContainer imageSrc={pythonLogo} name="Python" />
            <SkillIconContainer imageSrc={htmlLogo} name="HTML" />

            <div className={`overflow-hidden group bg-lightBg box2 rounded-3xl gap-4 `} >
                <div className='h-[80px] w-[80px] group'>
                <div className='w-full h-[80px] flex flex-col items-center justify-start px-3 py-6 mx-auto my-auto  bg-lightBg text-greyText font-extrabold text-xl text-center'>
                    DSA
                </div>
                <div className={`flex px-1 py-3 rounded-3xl flex-col text-xs items-center font-medium justify-center h-[80px] w-auto transition-transform ${theme==='light'?'text-lightTheme bg-lightBg ':'text-darkTheme bg-darkBg'} translate-y-10  group-hover:-translate-y-20 `}>
                    Data Structure & Algorithms
                </div>
                </div>
            </div>

            <div className={`overflow-hidden group bg-lightBg box2 rounded-3xl gap-4 `} >
                <div className='h-[80px] w-[80px] group'>
                <div className='w-full h-[80px] flex flex-col items-center justify-start px-3 py-6 mx-auto my-auto  bg-lightBg text-greyText font-extrabold text-xl text-center'>
                    DBMS
                </div>
                <div className={`flex px-3 py-4 flex-col rounded-3xl text-xs items-center font-semibold justify-center h-[80px] w-auto transition-transform ${theme==='light'?'text-lightTheme bg-lightBg ':'text-darkTheme bg-darkBg'} translate-y-10  group-hover:-translate-y-20 `}>
                    Data Base Management System
                </div>
                </div>
            </div>

            <SkillIconContainer imageSrc={cLogo} name="C" />
            <SkillIconContainer imageSrc={sqlLogo} name="SQL" />

            </div>
    </div>

  </div>
  )
}

export default MySkills