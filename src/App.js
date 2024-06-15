import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navabar from './components/Navabar';
import Skills from './components/Skills';
import { Element } from 'react-scroll';

const App = () => {
  const { theme } = useContext(GlobalContext);


  return (
    <div>
      <Navabar />
      <div className={`min-h-screen ${theme === 'light' ? 'text-greyText bg-lightBg' : 'text-lightBg bg-darkBg'}`}>
        <Element name="home"><Home /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="contact"><Contact /></Element>
      </div>
      <footer className={`w-full text-center text-white font-bold h-[60px] bg-${theme === 'light' ? 'lightTheme' : 'darkTheme'} flex items-center justify-center`}>
        <div>Made with ❤️ by Ayush Chauhan. <br />All rights reserved</div>
      </footer>
    </div>
  );
};

export default App;
