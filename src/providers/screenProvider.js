import React, { createContext, useEffect, useState } from "react";

import {scrSmall, scrMed, scrLrg} from "../utils/globals";


const ScreenContext = createContext();

function ScreenProvider({children}){
  // screen size states
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMedScreen, setIsMedScreen] = useState(false);
  const [isLrgSCreen, setIsLrgScreen] = useState(false);
  const [isMegaScreen, setIsMegaScreen] = useState(false);

  
  // listen for window resizes and set state
  useEffect(() => {
    // setting states on resize
    const handleResize = () => {
      const wid = window.innerWidth;
      setIsSmallScreen(wid <= scrSmall);
      setIsMedScreen(wid <= scrMed);
      setIsLrgScreen(wid > scrMed);
      setIsMegaScreen(wid > scrLrg);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contextValue = {
    isSmallScreen,
    isMedScreen,
    isLrgSCreen,
    isMegaScreen,
  }

  return(
    <>
      <ScreenContext.Provider value={contextValue}>
        {children}
      </ScreenContext.Provider>
    </>
  );
}

export { ScreenContext, ScreenProvider };