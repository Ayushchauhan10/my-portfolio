import React, { useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './context/GlobalContext';
// import { MdDarkMode, MdLightMode } from 'react-icons/md';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navabar from './components/Navabar';
import Skills from './components/Skills';

const App = () => {
  const { theme } = useContext(GlobalContext);


  return (
    <Router >

            <Navabar/>


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
            <div className='w-vw px-6 text-center'>
              Made with ❤️ by Ayush Chauhan. <br/>All rights reserved 
            </div>
        </div>
    </Router>
  );
};

export default App;
