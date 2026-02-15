import React, { useContext } from 'react'
import { GlobalContext, lightGlobalContext } from '../App'

export default function UserName() {
    const theme = useContext(GlobalContext)
    const isclarity = useContext(lightGlobalContext)
  return (
    <div className='border-amber-900 border-2 mt-10'>
        <h1>UserName page:</h1>
        <p className='text-fuchsia-800'>name: {theme}</p>
    </div>
  )
}
