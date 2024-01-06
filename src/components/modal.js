import React, { useContext } from "react";

import { IoMdClose } from "react-icons/io";
import { ModalContext } from "../providers/modalProvder";
import { ScreenContext } from "../providers/screenProvider";

function Modal({children}){

  const {closeModal} = useContext(ModalContext);
  const {maxLength} = useContext(ScreenContext);

  // const dimensions = ` max-h-[${Math.floor(maxLength*.90)}px] max-w-[${Math.floor(maxLength*.90)}px] `;

  const sideLength = Math.floor(maxLength*.9);

  const dimensions = {
    width: sideLength,
    height: sideLength,
  }

  return(
    <>
      <div className={"z-50 fixed top-0 left-0 h-full w-full bg-drawerClearBg flex flex-col justify-center"}>
        <div className={" relative m-auto bg-darkBg flex flex-col justify-center"} style={dimensions}>
          <div className="">
            {children}
          </div>
          <IoMdClose onClick={closeModal} className=" absolute -top-8 -right-8 text-4xl text-highlightText hover:cursor-pointer hover:text-highlightTextHover"/>
        </div>
      </div>
    </>
  );
}




export default Modal;