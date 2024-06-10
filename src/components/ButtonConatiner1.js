import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../App.css'

import instaIcon from '../assets/instagram.png'
import whatsAppIcon from '../assets/whatsapp.png';
import linkedIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png';


const ButtonContainer1 = () => {
    const phnNum="9643127808";
    const { theme } = useContext(GlobalContext);
  return (
    <div className='grid grid-cols-4 gap-8 mt-4'>
        <div className={`w-[55px] h-[55px] icons rounded-2xl  ${theme==='light'?'shadow1  p-2':'shadow2'} `}>
            <a href="https://www.linkedin.com/in/ayush-chauhan-4b06ba223/" target="_blank" rel="noreferrer"> 
            <img src={linkedIcon} alt="" /> 
              </a>
        </div>

        <div className={`w-[55px] h-[55px] icons rounded-2xl ${theme==='light'?'shadow1  p-2':'shadow2'} `}>
        <a
            href={`https://wa.me/${phnNum}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
        >
             <img src={whatsAppIcon} alt="" /> 

        </a>
        </div>

        <div className={`w-[55px] h-[55px] icons  rounded-2xl ${theme==='light'?'shadow1  p-2':'shadow2'} `}>

            <a href="https://x.com/b2_here" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="" /> 
             </a>
        </div>

        <div className={`w-[55px] h-[55px] icons  rounded-2xl ${theme==='light'?'shadow1  p-2':'shadow2'} `}>
            <a href="https://www.instagram.com/imayush__chauhan/" target="_blank" rel="noreferrer">
               <img src={instaIcon} alt="" /> </a>
        </div>
       

        
    </div>
   
  )
}

export default ButtonContainer1