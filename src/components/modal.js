import React, { useContext } from "react";

import { IoMdClose } from "react-icons/io";
import { ModalContext } from "../providers/modalProvder";

function Modal({children}){

  const {closeModal} = useContext(ModalContext);

  return(
    <>
      <div className="z-50 fixed top-0 left-0 h-full w-full bg-drawerClearBg flex flex-col justify-center">
        <div className={" h-[90vh] w-[90vh] relative m-auto bg-darkBg text-white text-justify flex flex-col justify-center"}>
          <div className=" px-5 pt-10 pb-5 ">
            {children}
          </div>
          <IoMdClose onClick={closeModal} className=" absolute top-2 right-2 text-4xl hover:cursor-pointer hover:text-lightTextHover p-1 "/>
        </div>
      </div>
    </>
  );
}




export default Modal;