import React from 'react'
import EngagementItem from './EngagementItem'
import { mardiguWowiek } from '../assets/images'
import { bookMark, like, reply, retweet } from '../assets/icons'
import Tilt from 'react-parallax-tilt'
import { accountItems } from '../constants'

const AccItemCard = ({ name, username, imageProfile, createAt, tweet, engagement }) => {
  return (
    <Tilt>
        <div className=' w-full md:w-3/4 lg:w-full md:mx-auto px-5 py-5 flex flex-1 justify-start gap-5 md:gap-7 bg-gray-700 mt-5'>
                <img className='sm:w-[50px] h-[50px] md:w-[70px] md:h-[70px]' src={accountItems.map((accItem) => (
                accItem.imageProfile
            ))} alt='mardigu-wowiek' />
                <div className='acc-content'>
                    <div className='acc-header'>
                        <div className='header flex gap-3'>
                            <p className='text-[16px] md:text-[20px] text-white font-sans'>{
                                accountItems.map((accItem) => (
                                    accItem.name
                                ))
                            }</p>
                            <p className='text-[16px] md:text-[20px] text-gray-300 font-sans font-thin'>{
                                accountItems.map((accItem) => (
                                    accItem.name
                                ))
                            }</p>
                        </div>
                        <p className='text-[14px] md:text-[16px] text-white font-sans font-thin'>{
                            accountItems.map((accItem) => (
                                accItem.name
                            ))
                        }</p>
                    </div>
                    <p className='text-[14px] md:text-[16px] text-white mt-4'>
                        {
                            accountItems.map((accItem) => (
                                accItem.name
                            ))
                        }
                    </p>
                    <div className='engagement flex flex-1 justify-between mt-5 md:mt-8'>
                        <EngagementItem icon={reply} amount={'8K'} />
                        <EngagementItem icon={retweet} amount={'15K'} />
                        <EngagementItem icon={like} amount={'20K'} />
                        <EngagementItem icon={bookMark} amount={'30K'} />
                    </div>
                </div>
            </div>
    </Tilt>
  )
}

export default AccItemCard