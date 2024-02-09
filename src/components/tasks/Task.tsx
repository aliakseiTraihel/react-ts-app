import './Task.css'
import {useState} from "react";

interface Task {
  text: string,
  active: boolean
}

function Task({task, callback}: {task: Task, callback: (task: Task) => void}) {

  const [selected, setSelected] = useState(false)

  const handleOnClick = () => {
    setSelected(!selected);
    (function () {
      callback(task)
    })()
  }

  return(
    <div className={selected ? 'selected ' : '' + task.active ? 'active' : ''}>
      <h3 onClick={handleOnClick}>{task.text}</h3>
    </div>
  );
}

export default Task;