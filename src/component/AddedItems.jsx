/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MdCancel, MdDeleteForever, MdCheck } from "react-icons/md";



const AddedItems = ({title, toggle, deleteTodo, darkMode}) => {

//
  return (
    <div className={`${darkMode ? 'bg-[#0e033d]  text-white' : 'bg-white' } flex  p-4 h-14 items-center justify-between text-blue-500 lg:w-[50%] md:w-[50%] m-auto shadow-2xl mt-1 mb-1 max-sm:mx-[5%] `}>
      
      <div className="items-center flex p-7 justify-between gap-5  ">
        {title.complete ? <MdCheck className="h-5 w-5 text-blue-500" onClick={() => toggle(title.id)} /> :<MdCancel className="h-5 w-5 text-blue-500" onClick={() => toggle(title.id)} /> }
      <h2 className={`${title.complete && "line-through"} `}>{title.title}</h2>
      </div>
      <div>
       <MdDeleteForever className="col text-red-500  h-5 w-5" onClick={()=> deleteTodo(title.id)}/>
      </div>
    
  </div>
  )
}

export default AddedItems