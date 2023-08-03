import React from 'react'
import AccItemCard from './AccItemCard'
import { accountItems } from '../constants'

const AccountItem = ({ name, username, imageProfile, createAt, tweet, engagement }) => {
  return (
    <div className='account-card'>
        <AccItemCard 
            name={accountItems.map((accItem) => (
                accItem.name
            ))}
            username={
                accountItems.map((accItem) => (
                    accItem.name
                ))
            }
            imageProfile={
                accountItems.map((accItem) => (
                    accItem.name
                ))
            }
            createAt={
                accountItems.map((accItem) => (
                    accItem.name
                ))
            }
            tweet={
                accountItems.map((accItem) => (
                    accItem.name
                ))
            }
            engagement={accountItems.map((accItem) => (
                accItem.name
            ))}
        />
    </div>
  )
}

export default AccountItem