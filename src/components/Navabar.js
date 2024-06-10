import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import { BsChatQuoteFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { HiHome } from "react-icons/hi2";
import { SiOnlyoffice } from "react-icons/si";
import { Link ,useLocation} from 'react-router-dom';



const Navabar = () => {
    const { theme } = useContext(GlobalContext);
    const location = useLocation();
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
                return 0; // Default to 'Home' if path does not match
        }
    });

    const linkItems = [
        { path: '/', label: 'Home', index: 0 ,icon:<HiHome/>},
        { path: '/projects', label: 'Projects', index: 1,icon:<SiOnlyoffice/> },
        { path: '/skills', label: 'About', index: 2,icon:<IoMdContact/> },
        { path: '/contact', label: 'Contact', index: 3,icon:<BsChatQuoteFill/> }
    ];

    const getLinkStyle = (index) => {
        return `w-[50px] h-[50px] relative group text-lightBg py-6 px-6 flex flex-row rounded-3xl items-center justify-center ${
            theme === 'light' ?
            active === index?' bg-lightTheme': 'bg-greyText'  
            : active === index?' bg-darkTheme': 'bg-greyText'  
        } `;
    };
    
    return (
        <div className={`flex flex-row mx-auto lg:flex-col gap-6 items-center justify-center backdrop-blur-sm bg-white/30 px-4 py-2 lg:px-2 lg:py-4 z-100 rounded-full ` }>
            {linkItems.map(item => (
                <Link to={item.path} key={item.index} onClick={() => setActive(item.index)}>
                    <div className={getLinkStyle(item.index) }>
                    
                        <span className='font-black text-2xl z-100'>{item.icon}</span>
                        <span className='hidden absolute right-16 px-2 py-1 rounded-t-3xl rounded-l-3xl text-lightBg bg-greyText group-hover:block '>{item.label}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Navabar;