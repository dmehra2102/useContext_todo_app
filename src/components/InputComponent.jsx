import React, { useContext, useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import "../styles/Todo.css";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";
import { TodoContext } from "../context/TodoContext";

const InputComponent = () => {

    const  {FetchAllTodo} = useContext(TodoContext);
    const [inputValue,setInputValue] = useState({title : "", status : false});
    const handlePostRequest = async ()=>{
        let data = await axios.post("http://localhost:8080/todos",inputValue);
        if(data.data){
            FetchAllTodo();
            setInputValue({...inputValue, title : ""});
        }
    }
  return (
    <div className="Input_box_div">
      <InputGroup>
        <Input
          focusBorderColor="blue.100"
          placeholder="Your Todo"
          variant={"outline"}
          width={"50vw"}
          size="lg"
          value={inputValue.title}
          onChange={(e)=>{setInputValue({...inputValue, title : e.target.value})}}
        />
        <InputRightElement children={<AddIcon color="blue.500" />} onClick={handlePostRequest}/>
      </InputGroup>
    </div>
  );
};

export default InputComponent;
