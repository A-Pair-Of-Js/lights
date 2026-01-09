import './App.css'
import { Circle } from './components/circle/Circle'

function App() {

  return (
    <>
      <h1>Lights</h1>
      <Circle lightColor='red'></Circle>
      <Circle lightColor='orange'></Circle>
      <Circle lightColor='green'></Circle>
      <div className="card">
      </div>
    </>
  )
}

export default App
