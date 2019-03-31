import styled from 'styled-components';

export const LoginForm = styled.div`
    display: flex;
    flex-flow: column;
    padding: 40px;
    text-align: center;
`;

export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const Button = styled.button`
    background-color: ${props => props.color ? props.color : '#002b36'};
    color: white;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.hover ? props.hover : '#073642'}; 
    }
`;