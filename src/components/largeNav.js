import React, { useState } from "react";
import logoPic from '../assets/logo.jpg';
import { NavLink } from "react-router-dom";

import { useScrollPosition } from '@n8tb1t/use-scroll-position';


function LargeNav() {

  const [scrollingDown, setScrollingDown] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
      setScrollingDown( prevPos.y > currPos.y );
    },
    [scrollingDown],
    undefined,
    undefined,
    200
  );


  // const sideLinkStyle = "text-yellow-500 hover:text-gray-500 text-center bg-red-700 flex-none w-[120px]";
  const linkWrapperStyle = "h-full w-[120px] justify-center flex items-center " +
    " bg-primaryBg hover:bg-secondBg text-primaryText ";

  const barHeight = scrollingDown ? " h-16 " : " h-24 ";
  const middleHeight = scrollingDown ? " h-16 " : " h-40 ";
  const imageDimensions = scrollingDown ? " w-12 h-12 " : " w-24 h-24 ";
  const linkDisplay = scrollingDown ? " hidden " : "  ";

  return (
    <>
    {/* the whole thing */}
      <div className="fixed z-50 w-full text-white shadow-lg">

        {/* the other buttons */}
        <div className="">
          <div className={"flex justify-center items-center min-w-[640px] bg-primaryBg duration-100 " + barHeight}>
            <NavLink className={linkWrapperStyle} to='services'>Services</NavLink>
            <NavLink className={linkWrapperStyle} to='portfolio'>Portfolio</NavLink>
            <div className='w-44'></div>
            <NavLink className={linkWrapperStyle} to='testimonials'>Brands</NavLink>
            <NavLink className={linkWrapperStyle} to='contact'>Contact Us</NavLink>
          </div>
        </div>

        {/* logo and home link in middle */}
        <NavLink to="/"
          className={'fixed top-0 left-1/2 transform -translate-x-1/2 ' + 
            ' flex flex-col items-center justify-center hover:cursor-pointer duration-100 ' +
            ' w-44 bg-primaryBg text-primaryText shadow-lg hover:bg-secondBg' + middleHeight }>
          <img src={logoPic} alt="" className={imageDimensions}/>
          <div className={linkDisplay + " flex flex-col items-center "}>
            <div>
              CONNECT Appliance
            </div>
            <hr className="border w-10/12 border-primaryText" />
            <div>
              Home
            </div>
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default LargeNav;