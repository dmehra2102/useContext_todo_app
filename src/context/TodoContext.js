import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({children})=>{
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        FetchAllTodo();

        return ()=>{
            setTodos([]);
        }
    },[]);
    const FetchAllTodo = async ()=>{
        let new_data = await axios("http://localhost:8080/todos");
        setTodos(new_data.data);
    }
    return <TodoContext.Provider value={{FetchAllTodo, todos}}>{children}</TodoContext.Provider>
}