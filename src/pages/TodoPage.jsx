import React from 'react'
import InputComponent from '../components/InputComponent';
import TodoBody from '../components/TodoBody';
import "../styles/Todo.css";

const TodoPage = () => {
  return (
    <div className='TodoPage'>
      <InputComponent />
      <TodoBody />
    </div>
  )
}

export default TodoPage