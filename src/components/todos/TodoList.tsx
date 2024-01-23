import "./TodoList.css";

import Todo from "./todo/Todo.tsx";
import { connect } from "react-redux";
import { useRef } from "react";
import { addTodo, TodoInterface, TodoState } from "../../redux/Reducer.tsx";

const mapStateToProps = (state: TodoState) => (state.todos);
const mapDispatchToProps = { addTodo };

function TodoList({todos, addTodo}: {todos?: Array<TodoInterface>, addTodo?: (todo: TodoInterface)=>void}) {

  const todoRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (todoRef.current) {
      addTodo && addTodo({
        id: Math.floor(Math.random() * 1000).toString(),
        status: "active",
        text: todoRef.current.value
      })
      todoRef.current.value = '';
    }
  }

  if (!todos) {
    return (<h3>Todos not found</h3>)
  }

  return (<div className="todo-list">
    <div className="todo-list_items">{
        todos && todos.map((todo: TodoInterface) =><Todo key={todo.id} todo={todo}/>)
    }</div>
    <div className="todo-list_add">
      <input type="text" ref={todoRef}/>
      <button onClick={handleClick} className="addTodo">➕</button>
    </div>
  </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);