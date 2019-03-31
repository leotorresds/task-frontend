import styled from 'styled-components';

export const Item = styled.div`
    padding: 20px;
    border-bottom: 1px solid #ccc;

    .delete{
        color: red;
        float: right;
        display: none;
        cursor: pointer;
    }
    &:hover{
        .delete{
            display: inline-block;
        }
    }
    @media(max-width: 499px){
        .delete{
            display: inline-block;
        }
    }

`;
