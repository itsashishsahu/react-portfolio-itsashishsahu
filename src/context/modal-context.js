import { createContext } from "react";
import { useContext, useState } from "react";

const ModalContext=createContext();
//Use createContext, we can create a state which can be consumed wherever we want them to be used
export const ModalProvider =({children})=>{

    const [showModal, setShowModal]=useState(false);

    const showModalHandler=()=>{
        setShowModal(true)
    }

    const closeModalHandler=()=>{
        setShowModal(false)
    }

    return <ModalContext.Provider value={{showModal, showModalHandler, closeModalHandler}}>{children}</ModalContext.Provider>
}

//custom hook to consume the modal context anywhere in the our app

export const useModalContext=()=>{
    return useContext(ModalContext);
}