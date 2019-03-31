import React, { Component, useState } from 'react';
import { Container, Box, Title } from './styles';

import Login from './components/Login';
import TodoItem from './components/TodoItem';


const App = () => {

  const [title, setTitle] = useState('Login');
  const [isLogged, setIsLogged] = useState(false);
  const authCheck = () => {
    return isLogged ? <TodoItem /> : <Login />;
  };


  return (
    <Container>
      <Title>{title}</Title>
      <Box>
        {authCheck()}
      </Box>
    </Container>
  );
};

export default App;
