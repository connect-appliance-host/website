import React, { useContext } from "react";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { ScreenContext } from "../providers/screenProvider";

function ContactInfo(){
  const {isSmallScreen} = useContext(ScreenContext);
  
  const socialLinkStyle = " h-8 w-8 hover:cursor-pointer hover:text-compBg";
  const padding = isSmallScreen ? " pb-10 " : " pb-16 ";
  const smallScreenLayout = isSmallScreen ? " flex-col h-[180px] pl-10 " : " h-[50px] ";


  return(
    <>
      {/* contact info at bottom */}
      <div className={padding + " w-full pt-10 bg-lightBgDark"}>
        <div className={" max-w-[600px] m-auto flex justify-around" + smallScreenLayout}>
          <div>
            <div className=" text-l ">
              Email
            </div>
            <div className="text-sm">
              installs@connectappliance.com
            </div>
          </div>
          <div>
            <div className="text-l">
              Phone
            </div>
            <div className="text-sm">
              (226) 887-3737
            </div>
          </div>
          <div>
            <div className="text-l">
              Socail
            </div>
            <div className="text-sm text-highlight flex ">
              <Link to="https://www.instagram.com/connectapplianceinc/" target="_blank">
                <FaInstagramSquare className={socialLinkStyle}/>
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=100067577806004" target="_blank">
                <FaFacebookSquare className={socialLinkStyle}/>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

function ContactLink(){

  const {isMedScreen} = useContext(ScreenContext);

  const fontSize = isMedScreen ? ' text-xl ' : ' text-3xl ';

  return(
    <>
      <div className="flex flex-col items-center space-y-5 py-10">
        <div className={fontSize + " text-center"}>
          We can help with your next project!
        </div>

        {/* contact button */}
        <Link className="p-4 bg-highlight w-40 text-highlightText flex items-center justify-center gap-2" to="/contact"> 
          <div>Contact us</div> 
          <CiMail className="inline-block"/>
        </Link>
        
      </div>
    </>
  )
}


function Footer({halfFooter}){
  return(
    <>
      {!halfFooter ? <ContactLink/> : null}
      <ContactInfo/>
    </>
  );
}


export default Footer;