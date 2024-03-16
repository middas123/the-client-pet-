import React from 'react';

// import logo
import Logo from '../assets/img/logo-white.svg';

// import data
import { social } from '../data';

const Footer = () => {
  return (
    <footer className='bg-orange py-8 lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between text-white gap-y-6'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='Logo' />
          </a>
          {/* copyright text */}
          <div className='text-[15px]'>
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
          {/* socials */}
          <div className='flex gap-x-4'>
            {social.map((item, index) => (
              <a href={item.href} key={index}>
                <div className='bg-[#fe8d71a9] hover:bg-[#fe8d71] w-10 h-10 rounded-full flex justify-center items-center transition text-2xl'>
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;