import React, { useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './context/GlobalContext';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navabar from './components/Navabar';
import Skills from './components/Skills';

const App = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);


  return (
    <Router className='relative'>
       <div className={`fixed z-100 bottom-10  w-[100%] lg:w-auto  flex flex-row items-center lg:items-start justify-center lg:justify-between lg:top-[200px] lg:right-10 z-100`}>
            <Navabar/>
        </div>

          <div onClick={toggleTheme}
            className={`fixed top-5 right-5 z-100 lg:top-10 lg:right-10 h-[50px] w-[50px] flex flex-col justify-center items-center ${
              theme === 'light' ? 'bg-darkBg' : 'bg-lightBg'
            } rounded-full p-7`}
          >
            <button  className='text-slate-400 text-3xl'>
              {theme === 'light' ? <MdDarkMode className='text-lightBg' /> : <MdLightMode className='text-darkBg' />}
            </button>
          </div>

        <div className={`w-vw  min-h-screen ${theme === 'light' ? 'text-greyText bg-lightBg' : 'text-lightBg bg-darkBg'}`}  >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        
        </div>

         <div className={`w-full  text-white font-bold h-[60px] bg-${theme==='light'?'lightTheme':'darkTheme'}  flex flex-center items-center justify-center`}>
            <div>
              Made with ❤️ by Ayush Chauhan. All rights reserved 
            </div>
        </div>
    </Router>
  );
};

export default App;
