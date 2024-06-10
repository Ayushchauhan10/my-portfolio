import React from 'react'

const SkillIconContainer = ({imageSrc,name}) => {
  return (
    <div className={`w-[80px] h-[80px]  group p-2 bg-lightBg box2 rounded-3xl flex flex-row items-center justify-center`} >
        
        <img src={imageSrc} alt="pic"/>
        {/* <span className='hidden  right-[90px] absolute  px-2 py-1 rounded-t-3xl rounded-l-3xl text-lightBg bg-greyText group-hover:block '>{name}</span> */}
    </div>
  )
}

export default SkillIconContainer