import React from 'react';
import { Item } from './styles';

const TodoItem = (props) => {
    return (
        <Item>
            <input onChange={(e) => props.checkTask(props.id, !props.completed)} type="checkbox" checked={props.completed} /> {props.description}
            <div onClick={() => props.deleteClick(props.id)} className="delete">
                X
            </div>
        </Item>
    );
};

export default TodoItem;
