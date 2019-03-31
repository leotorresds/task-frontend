import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Box = styled.div`
    height: auto;
    width: 350px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #7b7878;
    box-shadow: 2px 2px 37px 2px rgba(0,0,0,0.75);
`;

export const Title = styled.h1`
    color: #d2d8da;
    text-align: center;
`;