import React, { useContext} from 'react'
import SingleTodo from './SingleTodo';
import "../styles/Todo.css";

import { TodoContext } from '../context/TodoContext';

const TodoBody = () => {
    const {todos} = useContext(TodoContext);
  return (
    <div className='Todo_Body_div'>
        {todos?.map(({id,title,status},index)=>{
            return <SingleTodo key={id} id={id} index={index} title={title} status={status}/>
        })}
    </div>
  )
}

export default TodoBody