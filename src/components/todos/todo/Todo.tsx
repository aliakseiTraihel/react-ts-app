import "./Todo.css";

import { connect } from "react-redux";
import {TodoInterface, TodoState, onEdit, onDelete,} from "../../../redux/Reducer.tsx"
import {useRef, useState} from "react";

const mapStateToProps = (state: TodoState) => (state.todos);
const mapDispatchToProps = { onEdit, onDelete };

interface TodoProps {
  todo: TodoInterface,
  onEdit: (todo: TodoInterface)=>void,
  onDelete: (id: {id: string})=>void
}

function Todo({todo, onEdit, onDelete}: TodoProps) {

  const [edit, setEdit] = useState(false);
  const text = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    onEdit({
      id: todo.id,
      text: text.current ? text.current.value : '',
      status: "active"
    });
    setEdit(false);
  }

  const handleDelete = () => {
    onDelete({
      id: todo.id
    })
  }

  const handleStatus = () => {
    onEdit({
      id: todo.id,
      text: todo.text,
      status: todo.status === "active" ? "done" : "active"
    });
  }

  return (
    <div className="todo-item">
      <div className="todo-item_status">
        <input disabled={edit} type="checkbox" defaultChecked={todo.status !== "active"} onClick={handleStatus} />
      </div>
      <div className="todo-item_text" style={{'textDecoration' : todo.status === "active" ? 'none' : 'line-through'}}>
        {edit ?
          <input defaultValue={todo.text} ref={text} />
          :
          <span>{todo.text}</span>
        }
      </div>
      <div className="todo-item_action">
        {todo.status === "active" ?
          <>
            {edit ?
              <button onClick={handleSave}>💾</button>
              :
              <button onClick={() => setEdit(!edit)}>✎</button>
            }
          </>
          :
          <button onClick={handleDelete}>✕</button>
        }
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);