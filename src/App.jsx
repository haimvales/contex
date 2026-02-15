import { createContext, useRef, useState } from 'react'
import data from './data/data.json'
import './App.css'
import Contend from './comps/Contend'
import Header from './comps/Header';
import UserProfile from './comps/UserProfile';
import UserName from './comps/UserName';
export const GlobalContext = createContext("");
export const lightGlobalContext = createContext("light");


function App() {
  const [name, setname] = useState("")
  const [clarity, setclarity] = useState(data.inner)
  let isclarity = useRef(data.liget);
 

  let isclarity1 = isclarity.current
  const handClarity = (e) => {
    console.log(isclarity1)
    isclarity.current  = (!(isclarity1))
    console.log(isclarity.current)
    const save = e.target.value
    setclarity(e.target.innerText)
    e.target.innerText = save
    data.inner = "aa"
    data.liget = isclarity1
  }
  return (
    <div className={isclarity1 ? 'border h-screen  w-full  ':'border h-screen w-full bg-gray-800 text-white placeholder:text-red-500' }>
      <lightGlobalContext.Provider value={isclarity.current}>
        <button value={clarity} onClick={handClarity} className={isclarity1 ? 'mb-5 border bg-gray-300' : 'mb-5 text-white bg-gray-600'}>dark</button>
      <Header />
      <Contend></Contend>
      <p className='ml-30 mt-30'>שאלה 1: contex</p>
      <input  onChange={(e) => setname(e.target.value)} value={name} type="text" placeholder='your name'    className={isclarity1 ? 'border  ml-30   ':'opacity: 1 placeholder:text-red-500 border ml-30 ' }/>
      <div className='border h-100 w-100 absolute  ml-30 flex-row items-center justify-center'>
      <GlobalContext.Provider value={name}>
          <UserProfile ></UserProfile>
      </GlobalContext.Provider>
      </div>
      </lightGlobalContext.Provider>
    </div>
  )
}

export default App
