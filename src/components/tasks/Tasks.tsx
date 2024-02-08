import './Tasks.css'
import Task from "./Task.tsx";
import {useCallback, useEffect, useState} from 'react';

const init: Task[] = [
  {text: 'first', active: false}
]

function Tasks(){
  
  const [ active, setActive ] = useState<Task[]>([]);
  const [ done, setDone ] = useState<Task[]>([]);
  const [ selected, setSelected] = useState<Task>();
  
  const handleCallback = useCallback((task: Task) => {
    console.log(task)
    setSelected(task);
  }, []);
  
  const handleClick = (e: KeyboardEvent) => {
    console.log(e);
    console.log(selected);
  }
  
  useEffect(() => {
    document.addEventListener("keydown", handleClick);
    setActive(init)
    return () => {
      document.removeEventListener("keydown", handleClick);
    }
  }, [])

  return (
    <div>
      <h1>Test</h1>
      <div>{active.map((task, index) => <Task key={index} task={task} callback={handleCallback} selected={false}/>)}</div>
      <div>{done.map((task, index) => <Task key={index} task={task} callback={handleCallback} selected={false}/>)}</div>
    </div>
  );
}

export default Tasks;