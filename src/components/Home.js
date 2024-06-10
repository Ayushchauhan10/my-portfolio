import React, { useContext, useEffect, useState } from 'react';
import '../App.css'
import mainPic from '../assets/MainPic.jpeg';
import ButtonContainer from './ButtonContainer';
import pdfFile from '../assets/AyushResume.pdf';

import { RiDownloadLine } from "react-icons/ri";
import { BsChatTextFill } from "react-icons/bs";



import '../App.css';
import { GlobalContext } from '../context/GlobalContext';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Home = () => {
    const { theme } = useContext(GlobalContext);
    const lightThemeGradient = 'linear-gradient(78deg, rgba(245,102,146,1) 24%, rgba(221,225,231,1) 24%)';
    const darkThemeGradient = 'linear-gradient(78deg, rgba(56,189,249,1) 24%, rgba(15,23,42,1) 24%)';
    const lightBg = 'rgba(221,225,231,1)';
    const darkBg = 'rgba(15,23,42,1)';
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const [text] = useTypewriter({
        words: ["Specialize in MERN Stack . . .", " a final year B.Tech CS student. . .", " Proficient in C/C++","have strong problem-solving skills. . .","have strong foundation in DSA and CS fundamentals"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className='flex flex-col-reverse   px-6 py-10 md:px-0 md:flex-row min-h-screen items-center justify-start gap-5 w-vw bg-'
    style={{
        background: isLargeScreen
          ? theme === 'light'
            ? lightThemeGradient
            : darkThemeGradient
          : theme === 'light'
          ? lightBg
          : darkBg,
      }}
    >
        
        <div className='w-[80%] h-[60%] md:w-[50%] flex flex-col mt-6 md:mt-0 items-center justify-center'>

                <img src={mainPic} alt="pic" className='md:w-[28rem] md:h-[40rem]' />

        </div>

        <div className='md:w-[50%] w-vw flex flex-col items-start gap-4 justify-center'>

            <h1 className={`text-5xl mt-6 md:mt-0 font-black py-4 ${theme==='light'?'text-shadow-class1 ':'text-shadow-class2'}`}>
                Hi, I'm 
                <h2 className={`${theme==='light'? 'text-lightTheme':'text-darkTheme'}`}>
                Ayush Chauhan</h2>
            </h1>

            <div className='text-lg w-[350px] h-[50px]  font-medium'>
                {text}
                <span className='font-black text-2xl'>
                 <Cursor cursorBlinking="false" cursorStyle="|" cursorColor={`${theme==='light'?'rgba(245,102,146,1)':'rgba(56,189,249,1)'}`}/>
                </span>
            </div>

            <div className='w-full flex  my-4  flex-row items-center justify-start gap-4'>
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

            <div className={`${theme==='light'?'box2 p-2 rounded-full ':''}`}>
                <Link to='/contact'>
                <div  className={`font-bold group w-[150px] rounded-full border-2 z-0  flex flex-row justify-between ${theme==='light'?'border-lightTheme hover:bg-lightTheme  text-greyText':'border-darkTheme hover:bg-darkTheme text-darkBg'} `}>
                    
                    <div className={`  group-hover:text-white   rounded-full p-3 flex flex-row items-center justify-between ${theme==='light'?'bg-lightTheme text-lightBg':'bg-darkTheme text-darkBg'}`}>
                       <BsChatTextFill  className={`text-[20px]  group-hover:text-white  ` }/>

                    </div>

                     <div className={`py-2  pr-6 text-lg  group-hover:text-white  ${theme==='light'?'text-lightTheme ':'text-darkTheme'}`}>
                        Text Me
                    </div>

                </div>
                </Link>
            </div>
            </div>
            
            <div className={`flex flex-col gap-2`}>
                <div className={`text-sm font-semibold text-${theme==='light'?'greyText':'lightBg'}`}>
                    Social Media <span className={`font-bold text-${theme==='light'?'lightTheme':'darkTheme'}`}>&</span> Profiles:
                </div>
               
                    <ButtonContainer/>
                    
            </div>
            
        </div>
    </div>
  )
}

export default Home