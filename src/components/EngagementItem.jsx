import React from 'react'
import { reply } from '../assets/icons'

const EngagementItem = ({icon, amount}) => {
  return (
    <div className='engagement flex flex-1 items-center gap-2'>
        <img className='w-[30px] h-[30px]' src={icon} alt='imgy' />
        <p className='text-[16px] text-gray-300'>{amount}</p>
    </div>
  )
}

export default EngagementItem