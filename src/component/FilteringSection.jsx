/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';



const FilteringSection = ({filterOut, darkMode}) => {
  
  return (
    <div className={`${darkMode ? 'bg-[#0e033d] text-white' : 'bg-white'} lg:mx-auto lg:w-[50%] md:w-[50%] m-auto rounded divide-y divide-red-950 shadow max-sm:mx-[5%]`}>
      <div className="flex justify-center gap-8 py-6 px-7 mt-1 rounded-md">
        <button onClick={() => filterOut("all")}>All</button>
        <button onClick={() => filterOut("active")}>Active</button>
        <button onClick={() => filterOut("complete")}>Completed</button>
      </div>

    </div>
  );
};

export default FilteringSection;
