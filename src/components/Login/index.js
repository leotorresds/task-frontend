import React from 'react';
import { LoginForm, Input, Button } from './styles';

const Login = (props) => {
    return (
        <LoginForm>
            Login <Input value={props.email} onChange={props.handleEmail} required type='text' />

            Senha <Input value={props.password} onChange={props.handlePassword} required type='password' />
            <Button onClick={props.attemptLogin}>Entrar</Button>
            <a href="#" onClick={props.goRegister}>Cadastre-se</a>
        </LoginForm>
    );
};

export default Login;
