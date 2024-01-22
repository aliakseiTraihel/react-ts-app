import Todo from "./todo/Todo.tsx";
import { connect } from "react-redux";
import { useRef } from "react";
import { addTodo, TodoInterface, TodoState } from "../../redux/Reducer.tsx";

const mapStateToProps = (state: TodoState) => (state.todos);
const mapDispatchToProps = { addTodo };

function TodoList({todos, addTodo}: {todos?: Array<TodoInterface>, addTodo?: (todo: TodoInterface)=>void}) {

  const todo = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (todo.current) {
      addTodo && addTodo({
        id: Math.floor(Math.random() * 1000).toString(),
        status: "active",
        text: todo.current.value
      })
      todo.current.value = '';
    }
  }

  if (!todos) {
    return <></>;
  }

  return (<div className="todo-list">{
    todos.map((todo: TodoInterface) =><Todo key={todo.id} todo={todo}/>)
  }
    <div>
      <input type="text" ref={todo}/>
      <button onClick={handleClick} className="addTodo">add</button>
    </div>
  </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);