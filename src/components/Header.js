import React, {useState, useEffect} from 'react';

// import logo
import logo from '../assets/img/logo.svg'
//import icons
import { CgMenuRight } from 'react-icons/cg';
//import components
import Nav from './Nav';
import NavMobile from './NavMobile';
import Program from './Program';
const Header = () => {
  // header bg state 
  const [ bg, setBg ] = useState (false);
  //nav mobile state
  const [ navMobile, setNavMobile] = useState
   (false);

   //scroll events 
   useEffect (() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    });
   });



  return (
    <header 
    className= {`${
      bg ? 'bg-white py-3 shadow-md' :
      'bg-none py-5'
    } fixed w-full right-0 left-0 z-10
    transition-all duration-300`}
  
    >
     <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img src={logo} alt="" />
        </a>
         {/* Nav */}
        <div className='hidden lg:flex"'>
          <Nav />
        </div>
         {/* program */}
          <Program/>
        {/* nav mobile button */}
        <div>
          <CgMenuRight className='text-blue text-3xl'/>
        </div>
      </div>

    </header>
  );
};

export default Header;
