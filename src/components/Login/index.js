import React from 'react';
import { LoginForm, Input, Button } from './styles';

const Login = () => {
    return (
        <LoginForm>
            Login <Input type='text' />

            Senha <Input type='password' />
            <Button>Entrar</Button>
            <a href="#" onClick={() => alert("Cadastrado")}>Cadastre-se</a>
        </LoginForm>
    );
};

export default Login;
