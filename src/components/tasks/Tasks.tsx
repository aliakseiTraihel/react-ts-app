import './Tasks.css'
import Task from "./Task.tsx";
import {useEffect, useRef, useState} from 'react';

const init: Task[] = [
  {id: "342", text: 'Send email', active: true},
  {id: "421", text: 'Modify task', active: false}
]

interface Selected {
  task: Task,
  unselect: () => void
}

function Tasks(){
  
  const [ todos, setTodos ] = useState<Task[]>([]);
  const [ selected, setSelected ] = useState<Selected>();
  const taskRef = useRef<HTMLInputElement>(null);
  
  const handleCallback = (task: Task, unselect: () => void) => {
    if (selected) {
      selected.unselect();
    }
    setSelected({task: task, unselect: unselect});
  };
  
  const handleAdd = () => {
    if (taskRef.current) {
      setTodos([...todos, {
        id: Math.floor(Math.random() * 1000).toString(),
        text: taskRef.current.value,
        active: true
      }]);
      taskRef.current.value = '';
    }
  }

  const handlePress = (e: KeyboardEvent) => {
    if (!selected || !selected.task) {
      return;
    }

    switch (e.code) {
      case "ArrowRight":
        if (selected.task.active) {
          modify({...selected.task, active: false});
          selected.unselect();
        }
        break;
      case "ArrowLeft":
        if (!selected.task.active) {
          modify({...selected.task, active: true});
          selected.unselect();
        }
        break;
      default:
        break;
    }
  }
  
  useEffect(() => {
    document.addEventListener("keydown", handlePress);
    return () => {
      document.removeEventListener("keydown", handlePress);
    }
  }, [selected])

  useEffect(() => {
    setTodos(init)
  }, [])

  const modify = (task: Task) => {
    setTodos([...todos.filter(item => item.text != task.text), task])
  }

  return (
    <div className="task-component">
      <div className="task-container">
        <div className="active">
          <>
          <div>Active:</div>
          {todos.filter(task => task.active).map(task  => <Task key={task.id} task={task} callback={handleCallback}/>)}
          </>
        </div>
        <div className="done">
          <>
          <div>Done:</div>
          {todos.filter(task => !task.active).map(task => <Task key={task.id} task={task} callback={handleCallback}/>)}
          </>
        </div>
      </div>
      <div className="task-add">
        <input type="text" ref={taskRef}/>
        <button onClick={handleAdd} className="addTask">➕</button>
      </div>
    </div>
  );
}

export default Tasks;