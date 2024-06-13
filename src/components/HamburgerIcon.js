import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';
const HamburgerIcon = ({showNav,handleShowNav}) => {
  

    const { theme } = useContext(GlobalContext);
  return (

    <div className={`cursor-pointer `} onClick={handleShowNav}>
      <div
        className={`w-6 h-[4px] bg-headingColor transition-transform ${
          showNav ? 'rotate-45 translate-y-2' : ''
        } ${theme==='light'?'bg-lightTheme':'bg-darkTheme'}`}
      ></div>
      <div
        className={`w-3 h-[4px] bg-headingColor my-1 transition-opacity ${
          showNav ? 'opacity-0' : ''
        } ${theme==='light'?'bg-lightTheme':'bg-darkTheme'}`}
      ></div>
      <div
        className={`w-6 h-[4px] text-2xl bg-headingColor transition-transform ${
          showNav ? '-rotate-45 -translate-y-[5px]' : ''
        } ${theme==='light'?'bg-lightTheme':'bg-darkTheme'}`}
      ></div>
    </div>
  );
};

export default HamburgerIcon;