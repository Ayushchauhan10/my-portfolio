import {React,useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';
const SkillIconContainer = ({imageSrc,name}) => {
  
const { theme } = useContext(GlobalContext);
  return (

    <div className={`overflow-hidden group bg-lightBg box2 rounded-3xl gap-4 `} >
        
        <div className='h-[80px] w-[80px]  group'>

        <img src={imageSrc} alt="pic" className='w-full h-auto object-fill px-3 py-3 mx-auto my-auto'/>

        <div className={`flex px-3 py-4 flex-col items-center font-semibold justify-center h-[80px] w-auto transition-transform ${theme==='light'?'text-lightTheme bg-lightBg ':'text-darkTheme bg-darkBg'} translate-y-10  group-hover:-translate-y-20 `}>
          {name}
        </div>

        </div>
    </div>
  )
}

export default SkillIconContainer