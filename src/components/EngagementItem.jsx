import React from 'react'
import { accountItems } from '../constants'

const EngagementItem = ({ icon, amount }) => {

  return (
    <div className='engagement flex flex-1 items-center gap-1 md:gap-2'>
        <img 
            className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' 
            src={icon} 
            alt='img-icon' 
        />
        <p className='text-[14px] md:text-[16px] text-gray-300'>
            {amount}
        </p>
    </div>
  )
}

export default EngagementItem