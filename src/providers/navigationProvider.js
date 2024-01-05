import React, { createContext, useState } from 'react';
import Home from '../pages/homeComponents/home';
import Services from '../pages/serviceComponents/services';
import Portfolio from '../pages/portfolioComponents/portfolio';
import Testimonials from '../pages/testimonialComponents/testimonials';
import ContactUs from '../pages/contactUsComponents/contactUs';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const pageIndex = {
    'Services': Services,
    'Portfolio': Portfolio,
    'Home': Home,
    'Testimonials': Testimonials,
    'Contact Us': ContactUs,
  }

  const [currentRoute, setCurrentRoute] = useState('Home');
  
  const navigateTo = (route) => {
    setCurrentRoute(route);
  };

  const contextValue = {
    currentRoute,
    navigateTo,
    pageIndex,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };