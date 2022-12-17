import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import { AuthContextProvider } from './context/AuthContext';
import TodoPage from './pages/TodoPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { TodoContextProvider } from './context/TodoContext';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path:"/login",
    element : <Login />
  },
  {
    path : "/todos",
    element : <PrivateRoute><TodoPage /></PrivateRoute>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <AuthContextProvider>
      <TodoContextProvider>
        <RouterProvider router={router}/>
      </TodoContextProvider>
    </AuthContextProvider>
  </ChakraProvider>
  
);

