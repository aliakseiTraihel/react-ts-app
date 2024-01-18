import { ThemeContext } from "../../context/Contexts";
import "./Modal.css"
import {useContext} from "react";

interface ModalProps {
  show: boolean,
  onClose: () => void,
  children: React.ReactNode
}

function Modal({show, onClose, children}: ModalProps) {
  
  const theme = useContext(ThemeContext)

  if (!show) {
    return null;
  }
  
  return (
    <div className="modal">
      <div className={`modal-content ${theme}-theme-specific`}>
        <div className="modal-content_top">
          <button onClick={onClose}>X</button>
          <h2>Modal Window</h2>
        </div>
        {children}
      </div>
    </div>   
    );
}

export default Modal;