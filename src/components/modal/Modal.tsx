import {PropsWithChildren, useEffect, useReducer} from "react";

import './Modal.css'

type Props = {
  show: boolean
};

enum ActionType {
  SHOW = 'show',
  HIDE = 'hide',
}

interface Action {
  type: ActionType;
}

interface State {
  show: boolean;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "show" :
      return {show: true};
    case "hide" :
      return {show: false};  
    default:
      return state;
  }
}

function Modal(props: PropsWithChildren<Props>) {
  
  const [state, dispatch] = useReducer(reducer, {show: false});
  
  const handleClose = () => {
    dispatch({type: ActionType.HIDE});
    props.onHide();
  }
  
  const handleOpen = () => {
    dispatch({type: ActionType.SHOW});
  }
  
  useEffect(() => {
    props.show ? handleOpen() : handleClose();
  }, [props.show]);
  
  return (
    state.show ? 
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Window</h2>
        <button onClick={handleClose}>close</button>
        {props.children}
      </div>
    </div>
    : null
   );
}

export default Modal;