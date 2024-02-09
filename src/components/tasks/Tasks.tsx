import './Tasks.css'
import Task from "./Task.tsx";
import {useCallback, useEffect, useState} from 'react';

const init: Task[] = [
  {text: 'Send work email', active: true},
  {text: 'Modify task', active: false}
]

function Tasks(){
  
  const [ todos, setTodos ] = useState<Task[]>([]);
  const [ selected, setSelected] = useState<Task>();
  
  const handleCallback = useCallback((task: Task) => {
    setSelected(task);
  }, []);
  
  const handlePress = (e: KeyboardEvent) => {
    if (!selected) {
      return;
    }

    switch (e.code) {
      case "ArrowRight":
        if (selected.active) {
          modify({...selected, active: false});
        }
        break;
      case "ArrowLeft":
        if (!selected.active) {
          modify({...selected, active: true});
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
    <div className="task-container">
      <div className="active">{todos.filter(task => task.active).map((task, index) => <Task key={index} task={task} callback={handleCallback}/>)}</div>
      <div className="done">{todos.filter(task => !task.active).map((task, index) => <Task key={index} task={task} callback={handleCallback}/>)}</div>
    </div>
  );
}

export default Tasks;