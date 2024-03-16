import React from 'react';

//import icons
import PhoneIcon from '../assets/img/phone.svg';

const Program = () => {
  return (
  <div>
    {/* phone icon & phone number */}
    <div  className='flex lg:gap-x-[10px] items-baseline
    justify-end'>
      <img
        className='w-[28px] lg:w-[34px] lg:-[34px]'
      src={PhoneIcon}
       alt='' 
       />
      <div className='lg:text-[23px] text-blue font-extrabold'> 
        + 27 796 046 475
        </div>  
    </div>
      {/* open hours */}
      <div className='text-sm'>
        {/*  show Only in desktop mode */}
      <div className='hidden lg:flex'>
        Operating Hours: Mon - Sun: 10am - 6pm
      </div>
        {/* show Only in mobile  mode */}
        <div className='lg:hidden text-right'> Mon - Sun: 10am -
         6pm </div>
      </div>
  </div>
  );
};
export default Program;
