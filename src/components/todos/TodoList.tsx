import { useSelector } from "react-redux";
import { TodoState } from "../../redux/Reducer";
import Todo from "./todo/Todo.tsx";

function TodoList() {

  const todos = useSelector((state: any) => state.todos) as TodoState

  return (<>{
    todos.todos.map(todo =><Todo key={todo.id} todo={todo} />)
  }</>);
}

export default TodoList;