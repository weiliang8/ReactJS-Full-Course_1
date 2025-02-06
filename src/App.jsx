import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {


  const [todos,setTodos]=useState([
  ])

  function handleAddTodos(newTodo){
    const newTodoList=[...todos,newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo,todoIndex)=>{
      return todoIndex !==index
    })
    setTodos(newTodoList)
  }

  function handleEditTodos(index){

  }

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos}/>
    </main>
  )
}

export default App
