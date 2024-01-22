import { connect } from "react-redux";
import {TodoInterface, TodoState, onEdit, onDelete,} from "../../../redux/Reducer.tsx"

const mapStateToProps = (state: TodoState) => (state.todos);
const mapDispatchToProps = { onEdit, onDelete };

interface TodoProps {
  todo: TodoInterface,
  onEdit: (todo: TodoInterface)=>void,
  onDelete: (id: {id: string})=>void
}

function Todo({todo, onEdit, onDelete}: TodoProps) {

  const handleEdit = () => {
    onEdit({
      id: "1",
      text: "edited",
      status: "active"
    });
  }

  const handleDelete = () => {
    onDelete({
      id: "2"
    })
  }

  return (
    <div className="todo">
      <div>{todo.text}</div>
      <div>{todo.status}</div>
      <div>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);