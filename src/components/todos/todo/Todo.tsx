import { TodoInterface } from "../../redux/Reducer";

function Todo({todo: TodoInterface}) {
  return (<h3>{todo.text}</h3>);
}

export default Todo;