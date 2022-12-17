import { Button, useToast } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  const toast = useToast();
  const handleAlert = ()=>{
    toast({
      title: 'Login In, first.',
      description: "You are not logged In.",
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
  return (
    <div className='Navbar'>
        <div>
            <Button colorScheme='whiteAlpha'><Link to={"/todos"} onClick={handleAlert}>TodoList</Link></Button>
        </div>
        <div>
            <Button colorScheme='whiteAlpha'><Link to={"/login"}>Login</Link></Button>
        </div>
    </div>
  )
}

export default Navbar