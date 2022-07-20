import './styles.css'

interface TitleProps {
  children: string
}

export function Title({ children }: TitleProps) {
  return (
    <h1>{children}</h1>
  )
}