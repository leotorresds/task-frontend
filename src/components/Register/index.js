import React from 'react';
import { LoginForm, Input, Button } from '../Login/styles';


const Register = (props) => (
    <LoginForm>
        Nome <Input value={props.name} onChange={props.handleName} required type='text' />
        Email <Input value={props.email} onChange={props.handleEmail} required type='text' />
        Senha <Input value={props.password} onChange={props.handlePassword} required type='password' />
        <Button onClick={props.register}>Cadastrar</Button>
        <a href="#" onClick={props.goLogin}>Voltar</a>
    </LoginForm>
);

export default Register;
