import { FastField } from 'formik';
import React from 'react';

const Textarea = (props) => {

  
  const {name,label} = props
  return (
    <div className='w-3/4 relative'>
      <FastField as="textarea" id={name} name={name} className="peer dark:text-gray-300 text-gray-800 w-full bg-transparent outline-none px-4 py-2 rounded-xl border focus:border-2 border-[#4070f4] focus:shadow-md text-right"/>
      <label
				htmlFor={name}
				 className="absolute  -translate-y-1/2 bg-white dark:bg-[#1e2939] px-2  font-light  transition-all duration-300
        top-0 right-3 text-sm text-[#4070f4]">
				{label}
			</label>
      
    </div>
  );
};

export default Textarea;