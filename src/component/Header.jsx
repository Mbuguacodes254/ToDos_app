/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import{ FaMoon } from 'react-icons/fa6'
import { BsSun } from 'react-icons/bs'



const Header = ({HandleDarkMode, darkMode}) => {
 
  return ( 
    <div className='lg:w-[50%] md:w-[50%] lg:mx-auto m-auto max-sm:mx-[5%]'>
        <div className="text-white flex text-centers items-center justify-between m-auto pt-10 pb-6"> 
          <h1 className=" font-Outfit flex items-center text-4xl -tracking-tighter font-semibold">TODO</h1>
          {darkMode ? <BsSun onClick={HandleDarkMode} className='moon text-2xl'/> : <FaMoon onClick={HandleDarkMode} className='text-2xl text-[#0e033d]'/>}
        </div>
      
    </div>
  )
}

export default Header
