import React from 'react';
import { Input } from './styles';

const CreateItens = (props) => (

    <Input placeholder="Create new item" value={props.task} onChange={props.handleTask} onKeyPress={props.taskKeyPress} />

);

export default CreateItens;
