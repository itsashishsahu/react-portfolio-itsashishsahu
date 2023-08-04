import Card from "./Card";
import "./modal.css";
import ReactDOM  from "react-dom";
import { useModalContext } from "../context/modal-context";

const Modal = ({ className, children }) => {
  const {showModal, closeModalHandler} = useModalContext();
  return (
    <>
    
    {
      showModal && ReactDOM.createPortal(
        <>
          <section id="backdrop" onClick={closeModalHandler}></section>
          <Card className={className}>{children}</Card>
        </>, document.querySelector('#overlays')
      )
      }
    </>
  );
};

export default Modal;
