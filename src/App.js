import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Box, Title } from './styles';
import Login from './components/Login';
import TodoItem from './components/TodoItem';
import Register from './components/Register';
import CreateItens from './components/CreateItens';


const App = () => {

  const [title, setTitle] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginToken, setLoginToken] = useState(localStorage.getItem('token'));
  const [tasks, setTasks] = useState(null);
  const [taskToCreate, setTaskToCreate] = useState('');
  const [onResgiter, setOnRegister] = useState(false);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  const handleNameInput = (e) => {
    setName(e.target.value);
  }


  const handleTaskToCreate = (e) => {
    setTaskToCreate(e.target.value);
  }

  const login = async () => {
    try {
      const response = await axios.post("http://lt-task.herokuapp.com/users/login", { email, password });
      const { token } = response.data;

      setLoginToken(token);
      localStorage.setItem("token", token);
      // Clear login data
      setEmail('');
      setPassword('');
    } catch (e) {
      alert("Login ou senha incorretos, tente novamente!");
    }

  }

  const logout = async () => {
    try {
      await axios.post("http://lt-task.herokuapp.com/users/logout", {}, { headers: { "Authorization": `Bearer ${loginToken}` } });

      setLoginToken(undefined);
      setTitle("Login");
      localStorage.removeItem("token");
    } catch (e) {
      alert("Erro ao fazer logout");
    }

  }

  const handleRegister = () => {
    setOnRegister(!onResgiter);
    setTitle(onResgiter ? "Login" : "Cadastro");
  }

  const register = async () => {
    try {
      const response = await axios.post("http://lt-task.herokuapp.com/users/", { name, email, password });
      const { token } = response.data;

      setLoginToken(token);
      localStorage.setItem("token", token);

      // Clear register data
      setEmail('');
      setPassword('');
      setName('');
    } catch (e) {
      alert("Preencha todos os dados");
    }

  }

  const getTasks = async () => {
    try {
      const response = await axios.get("http://lt-task.herokuapp.com/tasks/", { headers: { "Authorization": `Bearer ${loginToken}` } });
      setTasks(response.data);
    } catch (e) {
      alert("Ocorreu um erro ao resgatar as tarefas");
    }
  };

  const deleteTask = async (id) => {
    try {
      if (window.confirm("Você deseja mesmo deletar esta tarefa?")) {
        await axios.delete("http://lt-task.herokuapp.com/tasks/" + id, { headers: { "Authorization": `Bearer ${loginToken}` } });
        const filteredTasks = tasks.filter(task => {
          return task._id !== id;
        });
        setTasks(filteredTasks);
      }

    } catch (e) {
      alert("Ocorreu um erro ao resgatar as tarefas");
    }
  };

  const updateTask = async (id, completed) => {
    try {
      await axios.patch("http://lt-task.herokuapp.com/tasks/" + id, { completed }, { headers: { "Authorization": `Bearer ${loginToken}` } });
      const updatedTask = [...tasks];
      const updatedTaskIndex = updatedTask.findIndex(task => task._id === id);

      updatedTask[updatedTaskIndex].completed = completed;
      setTasks(updatedTask);

    } catch (e) {
      alert("Ocorreu um erro ao salva a tarefa");
    }
  };

  const createTask = async () => {
    try {
      await axios.post("http://lt-task.herokuapp.com/tasks/", { description: taskToCreate, completed: false }, { headers: { "Authorization": `Bearer ${loginToken}` } });
      getTasks();

    } catch (e) {
      alert("Ocorreu um erro ao salva a tarefa");
    }
  };

  const handleTaskKeyPress = (e) => {
    if (e.key === 'Enter') {
      createTask();
      setTaskToCreate('');
    }
  };

  useEffect(() => {
    if (loginToken) {
      setTitle("Tasks");
      getTasks();
    }
  }, [loginToken]);


  // Check if login token exists
  const authCheck = () => {
    if (loginToken) {
      if (tasks) {
        if (tasks.length > 0) {
          return (
            <>
              <CreateItens task={taskToCreate} handleTask={handleTaskToCreate} taskKeyPress={handleTaskKeyPress} />
              {tasks.map(task => {
                return <TodoItem key={task._id} description={task.description} completed={task.completed} id={task._id} deleteClick={deleteTask} checkTask={updateTask} />
              })}
              <a style={{ margin: "20px" }} href="#" onClick={logout}>Sair</a>
            </>
          );
        }
        return <span className="m-20">Você não possuí nenhuma tarefa ainda</span>;
      }
      return <span className="m-20">Carregando...</span>;
    } else {

      if (onResgiter) {
        return <Register register={register}
          goLogin={handleRegister}
          handleEmail={handleEmailInput}
          handlePassword={handlePasswordInput}
          handleName={handleNameInput}
          email={email} password={password}
          name={name} />

      }
      return <Login attemptLogin={login}
        goRegister={handleRegister}
        handleEmail={handleEmailInput}
        handlePassword={handlePasswordInput}
        email={email}
        password={password} />

    }
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
