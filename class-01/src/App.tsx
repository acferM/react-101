import './App.css'
import { Button } from './components/Button'
import { Image } from './components/Image'
import { Title } from './components/Title'

function App() {
  return (
    <div>
      <Image 
        src="https://blog.rocketseat.com.br/content/images/size/w2000/2019/03/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png" 
        alt="react illustration" 
      />

      <Title>Hello React</Title>

      <footer>
        <Button>
          React
        </Button>

        <Button>
          Javascript
        </Button>

        <Button>
          JSX
        </Button>
      </footer>
    </div>
  )
}

export default App
