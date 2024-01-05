import React, { useContext } from "react";
import PageBanner from "../../components/pageBanner";
import ContactForm from "./contactForm";
import {ScreenContext} from "../../providers/screenProvider";

function ContactUs() {
  const {isSmallScreen} = useContext(ScreenContext);

  return (
    <>
      <PageBanner title={"Contact Us"} description={"We'd love to chat."} isSmallScreen={isSmallScreen}/>
      <ContactForm/>
    </>
  );
}
  
export default ContactUs;