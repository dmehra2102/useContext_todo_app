import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Login from '../pages/Login';

const PrivateRoute = ({children}) => {
    
  const {isAuth} = useContext(AuthContext);
  
  if(isAuth){
    return children
  }

  else{
    return <Login />
  }
  
}

export default PrivateRoute