import "./Modal.css"

interface ModalProps {
  show: boolean,
  onClose: () => void,
  children: React.ReactNode
}

function Modal({show, onClose, children}: ModalProps) {
  
  if (!show) {
    return null;
  }
  
  return (
    <div className="modal">
      <div className="modal-content">
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