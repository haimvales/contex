import React, { useContext } from 'react'
import UserName from './UserName'
import { GlobalContext, lightGlobalContext } from '../App'

export default function UserProfile() {
    const theme = useContext(GlobalContext)
    const isclarity = useContext(lightGlobalContext)
  return (
    <div className={isclarity ? '':'text-white   ' }>
        <section className='border-blue-600 border-2 mt-10'>
        <h1>UserProfile page:</h1>
        <p className='text-fuchsia-800'>name: {theme}</p>
        <p>last name:</p>
        <p>address:</p>
        </section>
        <UserName ></UserName>
    </div>
  )
}
