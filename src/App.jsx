import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {


  const [todos,setTodos]=useState([
    'Go to the gym',
    'Eat more fruits and veg',
    'Pick up the kids from school'
  ])

  function handleAddTodos(newTodo){
    const newTodoList=[...todos,newTodo]
    setTodos(newTodoList)
  }

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos}/>
    </main>
  )
}

export default App
