import React, { createContext, useState } from "react";

import Modal from "../components/modal";

const ModalContext = createContext();

function ModalProvider({children}){
  const [modalVisible, setModalVisible] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);


  function closeModal(){
    setModalVisible(false);
  }

  function openModal(component){
    setModalChildren(component);
    setModalVisible(true);
  }

  const contextValue = {
    modalVisible,
    modalChildren,
    openModal,
    closeModal,
  }

  return(
    <>
      <ModalContext.Provider value={contextValue}>
        {children}
        {modalVisible ? <Modal>{modalChildren}</Modal> : null}
      </ModalContext.Provider>
    </>
  );
}

export { ModalContext, ModalProvider};