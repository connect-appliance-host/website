import React from "react";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function ContactInfo(){
  const socialLinkStyle = " h-8 w-8 hover:cursor-pointer hover:text-compBg";

  return(
    <>
      {/* contact info at bottom */}
      <div className=" w-full pb-16 pt-10 bg-lightBgDark">
        <div className=" w-[600px] h-[50px] m-auto flex justify-around">
          <div>
            <div className="text-l">
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

  return(
    <>
      <div className="flex flex-col items-center space-y-5 py-10 pb-10">
        <div className="text-3xl inline-block">
          We can help build your project!
        </div>
        <div>
          Reach out
        </div>

        {/* contact button */}
        <Link className="p-4 bg-highlight w-32 text-highlightText" to="/contact"> 
          Contact us <CiMail className="inline-block"/>
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