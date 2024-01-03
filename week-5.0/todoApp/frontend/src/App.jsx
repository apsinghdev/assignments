
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { RenderTodo } from './components/RenderTodo'

function App() {

  return (
    <div>
      <CreateTodo></CreateTodo>
      <RenderTodo todos={[{title: "gym", description: 'do workout'}]}></RenderTodo>
    </div>
  )
}

export default App
