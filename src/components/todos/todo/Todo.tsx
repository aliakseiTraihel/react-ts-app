import { TodoInterface } from "../../redux/Reducer";

function Todo({todo}) {
  return (<h3>{todo.text}</h3>);
}

export default Todo;