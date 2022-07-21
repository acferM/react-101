import { FormEvent, useCallback, useState } from 'react'
import './styles.css'

interface AddTodoFormProps {
  onSubmit: (title: string) => void
}

export function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    onSubmit(inputValue)

    setInputValue('')
  }, [inputValue])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Adicione uma tarefa" value={inputValue} onChange={e => setInputValue(e.target.value)} />

      <button type="submit">Adicionar</button>
    </form>
  )
}