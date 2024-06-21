import React, { useContext, useState, useEffect,useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';
import { BsChatQuoteFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { HiHome } from "react-icons/hi2";
import { SiOnlyoffice } from "react-icons/si";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import HamburgerIcon from './HamburgerIcon';

const Navabar = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);
  const [showNav, setShowNav] = useState(1);
  const [active, setActive] = useState('home');

  const linkItems = useMemo(() => [
    { path: 'home', label: 'Home', icon: <HiHome /> },
    { path: 'projects', label: 'Projects', icon: <SiOnlyoffice /> },
    { path: 'skills', label: 'Skills', icon: <IoMdContact /> },
    { path: 'contact', label: 'Contact', icon: <BsChatQuoteFill /> }
], []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowNav(1);
      } else {
        setShowNav(0);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      linkItems.forEach(item => {
        const element = document.getElementById(item.path);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActive(item.path);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [linkItems]);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };


  const getLinkStyle = (isActive,path) => {
    const baseStyles =`p-4 absolute top-2 lg:relative group text-lightBg flex flex-row rounded-full items-center justify-center ${
        theme === 'light' ? (isActive ? 'bg-lightTheme' : 'bg-greyText') : (isActive ? 'bg-darkTheme' : 'bg-greyText')
      }`;
      let additionalStyles = '';
      switch (path) {
        case 'home':
            additionalStyles = ' animate-navBarItems0  '; 
            break;
        case 'projects':
            additionalStyles = ' animate-navBarItems1  ';  
            break;
        case 'skills':
            additionalStyles = ' animate-navBarItems2  '; 
            break;
        case 'contact':
            additionalStyles = '  animate-navBarItems3  '; 
            break;
        default:
            additionalStyles = '';
            break;
    }

    return `${baseStyles}${additionalStyles}`;
};

  return (
    <div className={`fixed px-2 z-10 mx-auto top-6 lg:ml-0 lg:px-0 lg:top-[200px] lg:right-10`}>
      <button onClick={handleShowNav} className='block lg:hidden ml-3 lg:ml-0'>
        <HamburgerIcon handleShowNav={handleShowNav} showNav={showNav} />
      </button>
      {showNav ?
        <div className={`flex relative w-vw flex-row mx-auto lg:flex-col lg:gap-2 rounded-full items-center justify-center lg:backdrop-blur-sm lg:bg-white/30 px-4 gap-2 py-2 lg:px-2 lg:py-4 z-100 lg:rounded-full`}>
          <div className={`flex flex-row mx-auto lg:flex-col lg:gap-4 rounded-full items-center justify-center lg:backdrop-blur-sm lg:bg-white/30 px-3 gap-3 py-2 lg:px-2 lg:py-4 z-100 lg:rounded-full`}>
            {linkItems.map(item => (
              <ScrollLink
                key={item.path}
                to={item.path}
                smooth={true}
                duration={100}
                spy={true}
                onSetActive={() => setActive(item.path)}
              >
                <div className={`${getLinkStyle(active === item.path,item.path)} cursor-pointer`} onClick={()=>{ if(window.innerWidth<500){handleShowNav();} setActive(item.path)} }>
                  <span className='font-black text-2xl z-100'>{item.icon}</span>
                  <span className={`hidden hover-visible absolute top-14 -right-8 lg:right-16 lg:top-0 px-2 py-1 rounded-br-3xl lg:rounded-br-none rounded-bl-3xl lg:rounded-tl-3xl rounded-tr-3xl group-hover:block ${theme==='light'?'text-lightBg bg-lightTheme':'text-white'}`}>
                    {item.label}
                  </span>
                </div>
              </ScrollLink>
            ))}
          </div>
          <div onClick={toggleTheme}
            className={`animate-navBarItems4 absolute lg:relative z-100 h-[50px] w-[50px] flex flex-col justify-center items-center ${theme === 'light' ? 'bg-darkBg' : 'bg-lightBg'} rounded-full p-7`}
          >
            <button className='text-slate-400 text-3xl'>
              {theme === 'light' ? <MdDarkMode className='text-lightBg' /> : <MdLightMode className='text-darkBg' />}
            </button>
          </div>
        </div>
        : ''
      }
    </div>
  );
};

export default Navabar;
