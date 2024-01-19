import { useSelector } from "react-redux";
import { TodoState } from "../../redux/Reducer";

function TodoList() {

  const todos = useSelector((state: any) => state.todos) as TodoState

  return (<>{
    todos.todos.map(todo =><h3>{todo.text}</h3>)
  }</>);
}

export default TodoList;