import React, { useState } from 'react';
import TaskRender from './TaskRender'

const CreateTodo = () => {
  const [ todo, setTodo] = useState(['nishant'])
  const [ userInput, setUserInput] = useState('')

  const Change = (event) => {
    setUserInput(event.target.value)
  }

  const SubmitForm = (event) => {
    event.preventDefault()
    setTodo(prevState => [...prevState, userInput])
    setUserInput('')

  }

  const DeleteTask = (id) => {
    setTodo(todo.filter(task=>todo.indexOf(task)!==id))
  }

  const ChangeTask = (id) => {
    setUserInput(todo.filter(task=>todo.indexOf(task)===id))
    let items = [...todo]
    items.splice(id, 1)
    setTodo(items)
  }
  return (
    <React.Fragment>
      <p className = 'todonum'>{todo.length}    Todos</p>
      <form onSubmit = {SubmitForm}>
        <input onChange = {Change} className = 'input' type = 'text' value = {userInput} />
      </form>
      <TaskRender tasks = {todo} delete = {DeleteTask} change = {ChangeTask}/>
    </React.Fragment>
  )
}

export default CreateTodo;
