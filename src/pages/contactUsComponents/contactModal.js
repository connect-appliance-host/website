import React from "react";
import { IoMdClose } from "react-icons/io";

function ContactModal({closeModal, modalMessage}){
  const centeringStyles = " absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ";

  return(
    <>
      <div className="z-50 fixed top-0 left-0 h-full w-full bg-drawerClearBg">
        <div className={centeringStyles + " h-[170px] w-[300px] relative bg-darkBg text-white text-justify flex flex-col justify-center"}>
          <div className=" px-5 pt-10 pb-5 ">
            {modalMessage}
          </div>
          <IoMdClose onClick={closeModal} className=" absolute top-2 right-2 text-4xl hover:cursor-pointer hover:text-lightTextHover p-1 "/>
        </div>
      </div>
    </>
  );
}

export default ContactModal;