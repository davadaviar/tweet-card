import React from 'react'
import { mardiguWowiek } from '../assets/images'
import EngagementItem from './EngagementItem'
import { bookMark, like, reply, retweet } from '../assets/icons'
import { accountItems } from '../constants'

const AccountItem = () => {
  return (
    <div className='account-card sm:w-full px-5 py-5 shadow-xl'>
        <div className='flex flex-1 justify-start gap-7'>
            <img className='w-[70px] h-[70px]' src={mardiguWowiek} alt='mardigu-wowiek' />
            <div className='acc-content'>
                <div className='acc-header'>
                    <div className='header flex gap-3'>
                        <p className='text-[20px] text-white font-sans'>Bossman Mardigu</p>
                        <p className='text-[20px] text-gray-300 font-sans font-thin'>10h</p>
                    </div>
                    <p className='text-[16px] text-white font-sans font-thin'>@bossmanmardigu</p>
                </div>
                <p className='w-full text-[16px] text-white mt-4'>
                    Pada lelaki yang sukses pasti ada wanita baik yang mendukungnya. Pada lelaki yang gagal pasti banyak wanita cantik di belakangnya.
                </p>
                <div className='engagement flex flex-1 justify-between mt-8'>
                    <EngagementItem icon={reply} amount={'8K'} />
                    <EngagementItem icon={retweet} amount={'15K'} />
                    <EngagementItem icon={like} amount={'20K'} />
                    <EngagementItem icon={bookMark} amount={'30K'} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountItem