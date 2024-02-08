import './Task.css'

interface Task {
  text: string,
  active: false
}

function Task({task, callback, selected}: {task: Task, callback: (task: Task)=> void, selected: boolean}) {
  return(
    <div className={selected ? 'selected ' : '' + task.active ? 'active' : ''}>
      <h3 onClick={() => callback(task)}>{task.text}</h3>
    </div>
  );
}

export default Task;