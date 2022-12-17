import React, { useContext } from 'react';
import { DeleteIcon,EditIcon } from '@chakra-ui/icons';
import "../styles/Todo.css";
import axios from 'axios';
import { TodoContext } from '../context/TodoContext';
// import { useToast } from '@chakra-ui/react';


const SingleTodo = ({id,index,title,status}) => {
    const {FetchAllTodo} = useContext(TodoContext);
    // const toast = useToast();
    const handleDelete = async ()=>{
        await axios.delete(`http://localhost:8080/todos/${id}`)
        FetchAllTodo();
    }

  return (
    <div className="SingleTodo_div">
        <div>
            <span className='index_no'>{index+1}.</span>
            <span className="title">{title}</span>
            <span className="status">{status ? "Completed" : "Not Completed"}</span>
            <span className="delete"><DeleteIcon id='icons' onClick={handleDelete}/></span>
            <span className='edit'><EditIcon id='icons' /></span>
        </div>
    </div>
  )
}

export default SingleTodo