import React from 'react';
import { LoginForm, Input, Button } from './styles';

const Login = (props) => {
    return (
        <LoginForm>
            Login <Input value={props.email} onChange={props.handleEmail} type='text' />

            Senha <Input value={props.password} onChange={props.handlePassword} type='password' />
            <Button onClick={props.attemptLogin}>Entrar</Button>
            <a href="#" onClick={() => alert("Cadastrado")}>Cadastre-se</a>
        </LoginForm>
    );
};

export default Login;
