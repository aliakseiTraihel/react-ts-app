import { TodoInterface } from "../../redux/Reducer";

function Todo({todo}) {
  return (
    <div className="todo">
      <span>{todo.text}</span>
      <span>{todo.status}</span>
    </div>
  );
}

export default Todo;