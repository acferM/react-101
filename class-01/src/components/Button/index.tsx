import './styles.css'

interface ButtonProps {
  children: string
}

export function Button({ children }: ButtonProps) {
  return (
    <button>
      {children}
    </button>
  )
}