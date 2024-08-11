import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navabar from './components/Navabar';
import Skills from './components/Skills';
import { Element } from 'react-scroll';

const App = () => {
  // Retrieve the current theme ('light' or 'dark') from the GlobalContext
  const { theme } = useContext(GlobalContext);

  return (
    // Wrapper to control overflow of content
    <div className='overflow-hidden'>
      {/* Navbar component, usually containing site navigation links */}
      <Navabar />
      
      {/* Main content area, with dynamic background and text color based on the theme */}
      <div className={`min-h-screen ${theme === 'light' ? 'text-greyText bg-lightBg' : 'text-lightBg bg-darkBg'}`}>
        {/* Wrapping components with 'Element' to enable smooth scrolling to these sections */}
        <Element name="home"><Home /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="contact"><Contact /></Element>
      </div>
      
      {/* Footer section with dynamic background color, aligned center */}
      <footer className={`w-full text-center text-white font-bold h-[60px] bg-${theme === 'light' ? 'lightTheme' : 'darkTheme'} flex items-center justify-center`}>
        {/* Footer content */}
        <div>Made with ❤️ by Ayush Chauhan. <br />All rights reserved</div>
      </footer>
    </div>
  );
};

export default App;
