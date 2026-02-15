import React, { useContext, useRef } from 'react'
import { useState } from "react";
import { lightGlobalContext } from '../App';


export default function Contend() {
    const isclarity = useContext(lightGlobalContext)
    const [textState, setT] = useState("")
    

    
    const clearInputState = () => {
        setT("")
    }

    const textRef = useRef(null);
    const pRef= useRef(null)

    const clearInputRef = () => {
        textRef.current.value = ""
    }

  return (
    <div className={isclarity ? '':'text-white placeholder:text-red-500  ' }>
        <h1 >שאלה 1: ref</h1>
        <section className='flex'>
        <input onChange={(e) => setT(e.target.value)} value={textState}  placeholder='הקלד כאן...' type="text" name='name_text' className='border placeholder-shown:bg-gray-300 bg-emerald-400 hover:bg-gray-400 focus:bg-amber-200 ' />
        <p className='border h-7 inline-block w-50  bg-gray-300 hover:bg-gray-400 not-empty:bg-amber-200'>{textState}</p>
        <button onClick={clearInputState} className='border hover:bg-red-500'>clear</button>
        </section>

        <section className='flex'>
        <input ref={textRef} onChange={(e) => textRef.current.value = e.target.value} placeholder='הקלד כאן...' type="text" name='name_tex' className='border placeholder-shown:bg-gray-300 bg-emerald-400 hover:bg-gray-400 focus:bg-amber-200 ' />
        <p ref={pRef} onClick={() => pRef.current.textContent = textRef.current.value} className='border h-7 inline-block w-50  bg-gray-300 hover:bg-gray-400 not-empty:bg-amber-200'>click me</p>
        <button onClick={clearInputRef} className='border hover:bg-red-500'>clear</button>
        </section>
    </div>
  )
}




