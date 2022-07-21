import { FiCheck, FiX, FiTrash } from 'react-icons/fi'

import './styles.css'

interface TaskProps {
  task_id: string
  title: string
  done: boolean
  onDeleteTask: (id: string) => void
  onToggleTaskStatus: (id: string) => void
}

export function Task({ task_id, done, title, onDeleteTask, onToggleTaskStatus }: TaskProps) {
  return (
    <li className={done ? "done" : ""}>
      <strong>{title}</strong>
      
       <div>
        <button type="button" onClick={() => onToggleTaskStatus(task_id)}>
          {done ? <FiX size={18} /> : <FiCheck size={18} />}
        </button>

        <button type="button" onClick={() => onDeleteTask(task_id)}>
          <FiTrash size={18} />
        </button>
       </div>
    </li>
  )
}