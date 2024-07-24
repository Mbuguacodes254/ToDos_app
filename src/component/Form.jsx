/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Form = ({addtheItem, darkMode}) => {
  
  // getting hold of anything the user enters in the input field
  const [itemList, setItemList] = useState("")

    // preventing the usual default by browsers when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    // add function here
    addtheItem(itemList)
    setItemList("");
  }


  return (
    <div className={`${darkMode ? 'bg-[#0e033d]' : 'bg-white'} lg:mx-auto lg:w-[50%]  flex md:w-[50%]  rounded justify-between m-auto px-2 max-sm:mx-[5%]`}>
        <div>
          <form onSubmit={handleSubmit} className='flex '>
            <input type="text" placeholder="Create new ToDo item"  className={`${darkMode ? 'text-white': 'text-gray-400'} p-8 text-base rounded h-14 outline-none bg-transparent`}
              onChange={(event) => setItemList(event.target.value)}
              value={itemList}
              required
              autoFocus
            />
          </form>
        </div>
        <div>
          <button type="submit" className={`${darkMode ? ' bg-gradient-to-r from-[#9947D7] to-blue-700' : 'bg-blue-700'} btn text-xl font-bold text-white py-2 px-5 h-14 mt-1 rounded-2xl`} onClick={handleSubmit}>
              Add
          </button>
        </div>
    </div>
  );
};

export default Form;
