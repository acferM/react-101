import { useCallback, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { AddTodoForm } from './src/AddTodoForm'
import { Task } from './src/Task'
import { TaskList } from './src/TaskList'

import './App.css'

type TaskType = {
  id: string
  title: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const handleAddTask = useCallback((title: string) => {
    setTasks(prevTasks => [...prevTasks, { id: uuid(), title, done: false }])
  }, [])

  const handleDeleteTask = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }, [])

  const handleToggleTaskStatus = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.map(task => (task.id === id ? { ...task, done: !task.done } : task)))
  }, [])

  return (
    <>
      <h1>Todo List</h1>

      <main>
        <AddTodoForm onSubmit={handleAddTask} />

        <TaskList>
          {tasks.map(task => (
            <Task 
              key={task.id} 
              task_id={task.id}
              done={task.done} 
              title={task.title} 
              onDeleteTask={handleDeleteTask}
              onToggleTaskStatus={handleToggleTaskStatus}
            />
          ))}
        </TaskList>
      </main>
    </>
  )
}

export default App
