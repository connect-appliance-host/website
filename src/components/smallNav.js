import React, { useState } from "react";

import logoPic from '../assets/logo.jpg';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";





function Drawer ({closeDrawer, drawerOpen}) {

  const drawerWidth = drawerOpen ? " w-screen " : ' w-0 ';

  // styles
  const menuItemStyle = 'bg-secondaryBg text-secondText text-lg my-3 px-5 py-2' + 
    ' hover:bg-secondBg hover:cursor-pointer';

  

  return (
    <>
      <div className={drawerWidth + " z-50 fixed right-0 h-screen bg-drawerClearBg duration-100 overflow-hidden"}>
        {/* menu */}
        <div className="z-50 absolute right-0 flex flex-col h-full bg-primaryBg w-40 pt-12">
          <NavLink className={menuItemStyle} to='services' onClick={closeDrawer}>Services</NavLink>
          <NavLink className={menuItemStyle} to='portfolio' onClick={closeDrawer}>Portfolio</NavLink>
          <NavLink className={menuItemStyle} to='/' onClick={closeDrawer}>Home</NavLink>
          <NavLink className={menuItemStyle} to='testimonials' onClick={closeDrawer}>Brands</NavLink>
          <NavLink className={menuItemStyle} to='contact' onClick={closeDrawer}>Contact Us</NavLink>

          {/* the close button */}
          <div className="absolute top-2 right-2 text-primaryText h-8 w-8 hover:cursor-pointer" onClick={closeDrawer}>
            <IoIosClose className="h-full w-full"/>
          </div>

          {/* logo at bottom */}
          <div className="absolute bottom-0 left-0 h-12 w-full flex items-center px-4 mx-auto mb-5 justify-between text-primaryText">
            <img src={logoPic} alt="logo" className='w-12 h-12'/>
            <div>
              <div>
                CONNECT 
              </div>
              <div>
                Appliance
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function FloatingLogo() {
  return (
    <>
      {/* logo at bottom */}
      <div className="z-50 fixed top-3 left-3 w-12 h-12 flex items-center justify-between text-white">
      <NavLink to="/"><img src={logoPic} alt="logo" className='w-12 h-12'/></NavLink>
    </div>
    </>
  )
}


function HamMenuButton ({openDrawer}) {
  return (
    <>
      <div className="z-40 fixed top-3 right-5 h-6 w-6 hover:cursor-pointer text-primaryText" onClick={openDrawer}>
        <GiHamburgerMenu className="h-full w-full"/>
      </div>
    </>
  )
}



function SmallNav () {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return(
    <>
      <FloatingLogo/>
      <Drawer closeDrawer={toggleDrawer} drawerOpen={drawerOpen}/>
      <HamMenuButton openDrawer={toggleDrawer}/>
    </>
  )
}


export default SmallNav;