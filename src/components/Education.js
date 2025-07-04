import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Education = () => {
    const { theme } = useContext(GlobalContext);
    const gradientColors = theme === 'light' 
    ? 'bg-gradient-to-r from-gray-300 to-gray-500' 
    : 'bg-gradient-to-r from-lightBg to-darkBg';

    const gradientColors2 = theme === 'light' 
    ? 'bg-gradient-to-b from-gray-300 to-gray-500' 
    : 'bg-gradient-to-b from-lightBg to-darkBg';

    
    return (
        <div className='w-vw flex flex-col gap-3 my-3 items-center w-full px-3 '>

        <div className='w-[370px] lg:w-[700px] flex flex-row items-center justify-start '>
            <div className={`w-[8px] h-[200px] ${gradientColors} rounded-full `} />
            <div className={`w-[100%] group flex flex-row items-center justify-start relative `}>
                       <span className={`w-[20px] h-[20px] absolute -left-[14px] rounded-full ${theme==='light'?'group-hover:bg-lightTheme border-4 border-lightTheme bg-lightBg':'group-hover:bg-darkTheme border-4 border-darkTheme bg-darkBg'} transition-colors duration-200`}/>

                       <div className={`w-[50px] lg:w-[100px] h-[8px] ${gradientColors2}  `}/>

                       <div className={`box2 w-full px-6 py-4 rounded-3xl flex flex-col items-start justify-start gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out`}>


                       <div className={` text-xs rounded-2xl px-2 py-0.5 ${theme==='light'?'bg-gray-400 text-white':'bg-gray-600 text-white'} `}>(2021-pursuing)</div>

                            <div className='w-[100%] flex flex-row items-center justify-between'>

                                <div className={`w-auto text-left  lg:text-xl font-black ${theme==='light'?'text-lightTheme':'text-darkTheme'}`}>
                                    B.Tech | CSE 
                                    
                                    <div className={`hidden lg:block w-full text-xs lg:text-sm italic text-left font-normal ${theme==='light'?'text-greyText':'text-lightBg'} `}> Netaji Subhas University of Technology, Delhi</div>
                                    <div className={` block lg:hidden w-full text-xs lg:text-sm italic text-left font-normal ${theme==='light'?'text-greyText':'text-lightBg'} `}> NSUT, Delhi</div>
                                </div>
                                <div className={`w-fit lg:w-auto lg:text-right px-2 text-sm lg:text-lg font-semibold italic ${theme==='light'?'text-lightTheme':'text-darkTheme'}`}>CGPA: 8.2 </div>   
                            </div>

                            
                            <div className={`font-semibold m text-xs lg:text-sm ${theme==='light'?'text-gray-500':'text-gray-500'}`}>
                                Learned and mastered a range of subjects like:
                                
                            <div className={`font-medium text-xs lg:text-normal mt-1 ${theme==='light'?'text-greyText':'text-white'}`}>
                               Data Structures, Algorithm Analysis, C/C++, Python, Web Development, OOPS, Operating System, DBMS, Cloud Computing etc.
                            </div>
                            </div>

                       </div>
            </div>
        </div>

        <div className='w-[370px] lg:w-[700px] flex flex-row items-center justify-start '>
            <div className={`w-[8px] h-[300px] ${gradientColors} rounded-full -mt-6`} />
            <div className={`w-[100%] group flex flex-row items-center justify-start relative`}>
                      <span className={`w-[20px] h-[20px] absolute -left-[14px] rounded-full ${theme==='light'?'group-hover:bg-lightTheme border-4 border-lightTheme bg-lightBg':'group-hover:bg-darkTheme border-4 border-darkTheme bg-darkBg'} transition-colors duration-200`}/>

                       <div className={`w-[50px] lg:w-[100px] h-[8px] ${gradientColors2}  `}/>

                       <div className={`box2 w-full px-6 py-4 rounded-3xl flex flex-col items-start justify-start gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out`}>

                       <div className={` text-xs rounded-2xl px-2 py-0.5 ${theme==='light'?'bg-gray-400 text-white':'bg-gray-600 text-white'} `}>(2019-20)</div>

                            <div className='w-[100%] flex flex-row items-center justify-between'>

                                <div className={`w-auto text-left  lg:text-xl font-black ${theme==='light'?'text-lightTheme':'text-darkTheme'}`}>
                                   12th Class (PCM)
                                    <div className={`text-xs hidden lg:block lg:text-sm italic font-normal ${theme==='light'?'text-greyText':'text-lightBg'} `}>Central Board of Secondary Education (CBSE)</div>
                                    <div className={`text-xs block lg:hidden lg:text-sm italic font-normal ${theme==='light'?'text-greyText':'text-lightBg'} `}>(CBSE)</div>
                                </div>
                                <div className={`w-auto text-right px-2 text-sm lg:text-lg font-semibold italic ${theme==='light'?'text-lightTheme':'text-darkTheme'}`}>Percent: 94.4 </div>   
                            </div>

                            <div className={`font-semibold  text-xs lg:text-sm ${theme==='light'?'text-gray-500':''}`}>
                               <div>
                                Cleared JEE with remarkable percentile of 98.4
                                
                                </div>
                                <div>
                                Cleared NDA , (Conference out in SSB)
                                </div>
                                
                            </div>

                            <div className={`font-semibold text-xs lg:text-sm ${theme==='light'?'text-gray-500':'text-gray-500'}`}>
                                Learned and mastered a range of subjects like:
                                
                            <div className={`font-medium text-normal mt-1 ${theme==='light'?'text-greyText':'text-white'}`}>
                                Physics, Chemistry, Maths
                            </div>
                            </div>


                            
                            
                       </div>
            </div>
        </div>
        <div className='w-[370px] lg:w-[700px] flex flex-row items-center justify-start '>
            <div className={`w-[8px] h-[200px] ${gradientColors} rounded-full -mt-6`} />
            <div className={`w-[100%] group flex flex-row items-center justify-start relative`}>
                      <span className={`w-[20px] h-[20px] absolute -left-[14px] rounded-full ${theme==='light'?'group-hover:bg-lightTheme border-4 border-lightTheme bg-lightBg':'group-hover:bg-darkTheme border-4 border-darkTheme bg-darkBg'} transition-colors duration-200`}/>

                       <div className={`w-[50px] lg:w-[100px] h-[8px] ${gradientColors2}  `}/>

                       <div className={`box2 w-full px-6 py-4 rounded-3xl flex flex-col items-start justify-start gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out`}>

                       <div className={` text-xs rounded-2xl px-2 py-0.5 ${theme==='light'?'bg-gray-400 text-white':'bg-gray-600 text-white'} `}>(2017-18)</div>

                            <div className='w-[100%] flex flex-row items-center justify-between'>

                                <div className={`w-auto text-left  lg:text-xl font-black ${theme==='light'?'text-lightTheme':'text-darkTheme'}`}>
                                   10th Class 
                                    <div className={`text-xs hidden lg:block lg:text-sm italic font-normal ${theme==='light'?'text-greyText':'text-lightBg'} `}>Central Board of Secondary Education (CBSE)</div>
                                    <div className={`text-xs block lg:hidden lg:text-sm italic font-normal ${theme==='light'?'text-greyText':'text-lightBg'} `}>(CBSE)</div>
                                </div>
                                <div className={`w-auto text-right px-2 text-sm lg:text-lg font-semibold italic ${theme==='light'?'text-lightTheme':'text-darkTheme'}`}>Percent: 93.6 </div>   
                            </div>

             
                            <div className={`font-semibold text-xs lg:text-sm ${theme==='light'?'text-gray-500':'text-gray-500'}`}>
                                Learned and mastered a range of subjects like:
                                
                            <div className={`font-medium text-normal mt-1 ${theme==='light'?'text-greyText':'text-white'}`}>
                                Physics, Chemistry, Maths
                            </div>
                            </div>


                            
                            
                       </div>
            </div>
        </div>

        
        

        
        </div>
    );
}

export default Education;
