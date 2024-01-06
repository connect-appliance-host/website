import React, { createContext, useEffect, useState } from "react";

import {scrSmall, scrMed, scrLrg} from "../utils/globals";


const ScreenContext = createContext();

function ScreenProvider({children}){
  // screen size states
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMedScreen, setIsMedScreen] = useState(false);
  const [isLrgSCreen, setIsLrgScreen] = useState(false);
  const [isMegaScreen, setIsMegaScreen] = useState(false);

  const [maxLength, setMaxLength] = useState(0);
  
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

    const findMaxLength = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if(width < height){
        setMaxLength(width);
      } else {
        setMaxLength(height);
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', findMaxLength);
    findMaxLength();
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
    maxLength,
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