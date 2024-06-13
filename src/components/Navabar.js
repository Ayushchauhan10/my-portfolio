import React, { useContext, useState,useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../App.css';
import { BsChatQuoteFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { HiHome } from "react-icons/hi2";
import { SiOnlyoffice } from "react-icons/si";
import { Link ,useLocation} from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import HamburgerIcon from './HamburgerIcon';

const Navabar = () => {
    const { theme,toggleTheme } = useContext(GlobalContext);
    const location = useLocation();
    const [showNav,setShowNav] =useState(1);
    const [active, setActive] = useState(() => {
        // Determine initial active value based on current path
        switch (location.pathname) {
            case '/':
                return 0;
            case '/projects':
                return 1;
            case '/skills':
                return 2;
            case '/contact':
                return 3;
            default:
                return 0; 
        }
    });

    const linkItems = [
        { path: '/', label: 'Home', index: 0 ,icon:<HiHome/>},
        { path: '/projects', label: 'Projects', index: 1,icon:<SiOnlyoffice/> },
        { path: '/skills', label: 'About', index: 2,icon:<IoMdContact/> },
        { path: '/contact', label: 'Contact', index: 3,icon:<BsChatQuoteFill/> }
    ];
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // Tailwind 'lg' breakpoint
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

    const getLinkStyle = (index,isLarge) => {

        const baseStyles = ` p-4 absolute top-2  lg:relative group text-lightBg  flex flex-row rounded-full items-center justify-center ${
            theme === 'light' ? (active === index ? 'bg-lightTheme' : 'bg-greyText') : (active === index ? 'bg-darkTheme' : 'bg-greyText')
        }`;
        
        let additionalStyles = '';
        if(isLarge)
            index=5;
        switch (index) {
            case 0:
                additionalStyles = ' animate-navBarItems0  '; 
                break;
            case 1:
                additionalStyles = ' animate-navBarItems1  ';  
                break;
            case 2:
                additionalStyles = ' animate-navBarItems2  '; 
                break;
            case 3:
                additionalStyles = '  animate-navBarItems3  '; 
                break;
            default:
                additionalStyles = '';
                break;
        }
    
        return `${baseStyles}${additionalStyles}`;
    };
    
    
  const handleShowNav = ()=>{
       setShowNav(!showNav);
  }
    
    return (
     
        <div className={`fixed px-2  mx-auto top-6 lg:ml-0 lg:px-0 lg:top-[200px] lg:right-10`}>
            <button onClick={handleShowNav} className='block lg:hidden ml-3 lg:ml-0'>
              <HamburgerIcon handleShowNav={handleShowNav} showNav={showNav}  />
            </button>
        {
         showNav ?   
        <div className={`flex relative w-vw flex-row mx-auto lg:flex-col lg:gap-2 rounded-full items-center justify-center lg:backdrop-blur-sm lg:bg-white/30 px-4 gap-2 py-2 lg:px-2 lg:py-4 z-100 lg:rounded-full ` }>
          <div className={`flex  flex-row mx-auto lg:flex-col lg:gap-4 rounded-full items-center justify-center backdrop-blur-sm lg:bg-white/30 px-3 gap-3 py-2 lg:px-2 lg:py-4 z-100 lg:rounded-full ` }>
           {linkItems.map(item => (
                <Link to={item.path} key={item.index} onClick={() => setActive(item.index)}>
                    {

                    <div className={` lg:${getLinkStyle(item.index)}` }>
                    
                        <span className='font-black text-2xl z-100'>{item.icon}</span>
                        <span className='hidden hover-visible absolute top-14 -right-8 lg:right-16 lg:top-0 px-2 py-1 rounded-br-3xl lg:rounded-br-none  rounded-bl-3xl lg:rounded-tl-3xl rounded-tr-3xl text-lightBg bg-greyText group-hover:block '>{item.label}</span>
                    </div>
                    }
                </Link>
            ))}

            </div> 
            <div onClick={toggleTheme}
            className={`animate-navBarItems4 absolute  lg:relative z-100  h-[50px] w-[50px] flex flex-col justify-center items-center ${
              theme === 'light' ? 'bg-darkBg' : 'bg-lightBg'
            } rounded-full p-7`}
          >
            <button  className='text-slate-400 text-3xl'>
              {theme === 'light' ? <MdDarkMode className='text-lightBg' /> : <MdLightMode className='text-darkBg' />}
            </button>
        </div>
        </div>
        :''
        }


        
        </div>
    );
};

export default Navabar;