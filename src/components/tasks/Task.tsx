import './Task.css'
import {useState} from "react";

interface Task {
  id: string,
  text: string,
  active: boolean
}

function Task({task, callback}: {task: Task, callback: (task: Task | undefined, unselect: () => void) => void}) {

  const [selected, setSelected] = useState(false)

  const handleOnClick = () => {
    setSelected(!selected);
    (function () {
      !selected ?
      callback(task, () => setSelected(false)) :
      callback(undefined, () => {})
    })()
  }

  return(
    <div onClick={handleOnClick} className={selected ? 'selected ' : '' + 'task-item'}>
      {task.text}
    </div>
  );
}

export default Task;