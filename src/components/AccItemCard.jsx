import React from 'react'
import EngagementItem from './EngagementItem'
import { bookMark, like, reply, retweet } from '../assets/icons'
import Tilt from 'react-parallax-tilt'

const AccItemCard = ({ name, username, imageProfile, createAt, tweet }) => {
  return (
    <Tilt>
        <div className=' w-full md:w-3/4 lg:w-full md:mx-auto px-5 py-5 flex flex-1 justify-start gap-5 md:gap-7 bg-gray-700 hover:bg-gray-500 hover:scale-75 hover:rounded-xl ease-in-out duration-300 mt-5'>
                <img className='sm:w-[50px] h-[50px] md:w-[70px] md:h-[70px]' src={imageProfile} alt={name} />
                <div className='acc-content w-full'>
                    <div className='acc-header'>
                        <div className='header flex gap-3'>
                            <p className='text-[16px] md:text-[20px] text-white font-sans'>{name}</p>
                            <p className='text-[16px] md:text-[20px] text-gray-300 font-sans font-thin'>{createAt}</p>
                        </div>
                        <p className='text-[14px] md:text-[16px] text-white font-sans font-thin'>{username}</p>
                    </div>
                    <p className='text-[14px] md:text-[16px] text-white mt-4'>{tweet}</p>
                    <div className='engagement flex flex-1 justify-between mt-5 md:mt-8'>
                        <EngagementItem icon={reply} />
                        <EngagementItem icon={retweet} />
                        <EngagementItem icon={like} />
                        <EngagementItem icon={bookMark} />
                    </div>
                </div>
            </div>
    </Tilt>
  )
}

export default AccItemCard