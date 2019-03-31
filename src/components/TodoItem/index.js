import React from 'react';
import { Item } from './styles';

const TodoItem = (props) => {
    return (
        <Item>
            <input type="checkbox" /> Lorem ipsum
            <div className="delete">
                X
            </div>
        </Item>
    );
};

export default TodoItem;
