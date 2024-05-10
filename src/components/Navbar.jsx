import React from 'react'
import {FaSearch} from "react-icons/fa";
import { CgProfile } from 'react-icons/cg'
import {useSelector} from 'react-redux'
function Navbar(navBackground={navBackground}) {
  const user = useSelector(state=>state.tokenset.user); 
  const userName = user && user.name ? user.name : 'Guest';
  return (
    <>  
      <div className={`z-10 flex w-[100vw]  flex-1 h-17 pb-4 items-center justify-between fixed top-0 pt-4 ${navBackground.navBackground && "bg-black/70"}`}>


        <div className='flex items-center border-white border-[1px] bg-zinc-800 text-white px-4 w-full sm:w-[40vw] rounded-full ml-4 sm:ml-0 sm:mt-3'>
            <FaSearch />
            <input className='w-full ml-2 h-12 rounded-full border-none focus:outline-none bg-zinc-800' type="text" placeholder="What do you want to play?" />
        </div>
        <div className='flex w-full justify-end'>
            <div className='flex items-center  px-2'>
                <div className='p-2 text-xl bg-green-600 rounded-full text-black'>
                    <CgProfile />
                </div>
                <h1 className="text-white text-sm font-semibold px-1">{userName}</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar