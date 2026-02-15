import React, { useContext, useState } from 'react'
import { GlobalContext, lightGlobalContext } from '../App'




export default function Header() {
    const isclarity = useContext(lightGlobalContext)
    console.log(isclarity)
    // const [light, setLiget] = useState(true)

  return (
    <div className={isclarity ? ' h-20 w-full bg-gray-300 ':'bg-white  h-20 w-full text-black ' }>
        my profile page: 
    </div>
  )
}
