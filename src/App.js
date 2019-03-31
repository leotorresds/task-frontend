import React, { useState } from 'react';
import axios from 'axios';

import { Container, Box, Title } from './styles';
import Login from './components/Login';
import TodoItem from './components/TodoItem';


const App = () => {

  const [title, setTitle] = useState('Login');
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginToken, setLoginToken] = useState(null);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  const login = async () => {
    try {
      const data = await axios.post("http://lt-task.herokuapp.com/users/login", { email, password })
      setTitle("Tasks");
      setIsLogged(true);
      setLoginToken(data.token);
    } catch (e) {
      alert(e);
    }

  }

  const authCheck = () => {
    return isLogged ? <TodoItem /> : <Login attemptLogin={login} handleEmail={handleEmailInput} handlePassword={handlePasswordInput} email={email} password={password} />
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
